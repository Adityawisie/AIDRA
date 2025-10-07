import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: '.env.local' });

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const RESOURCE_ID = "579b464db66ec23bdd000001d9b2e74c323e4b2742f9fe16160cbad7";
const DATAGOV_API_KEY = process.env.DATAGOV_API_KEY;

// Mapping dataset names → dataset types
const datasets = [
  { type: "scholarship_schemes", desc: "Scheme-wise Names of Scholarships/Fellowships" },
  { type: "post_matric_st", desc: "Post-Matric Scholarship for ST Students" },
  { type: "district_schools_colleges", desc: "District wise Number of Schools and Colleges" },
  { type: "ugc_universities", desc: "Universities included in UGC list & Colleges under 2(f)/12(B)" },
  { type: "nmms_scholarships", desc: "National Means-cum-Merit Scholarships" },
  { type: "maha_goa_schemes", desc: "Funds Released & Students Availing Benefits in Maharashtra & Goa" }
];

// Fetch data from Data.gov API
async function fetchDataset(datasetType) {
  console.log(`Fetching dataset: ${datasetType}...`);
  const url = `https://api.data.gov.in/resource/${RESOURCE_ID}?api-key=${DATAGOV_API_KEY}&format=json&limit=1000`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.records) {
    console.error(`${datasetType} → No records found`);
    return;
  }

  // Add dataset_type to each record
  const recordsWithType = data.records.map(record => ({ ...record, dataset_type: datasetType }));

  // Insert into Supabase (single table)
  const { error } = await supabase.from("education_data").insert(recordsWithType);
  if (error) console.error(datasetType, "Insert Error:", error);
  else console.log(`${datasetType} synced ✅`);
}

// Loop over all datasets
async function syncAllDatasets() {
  for (const ds of datasets) {
    await fetchDataset(ds.type);
  }
}

syncAllDatasets();
