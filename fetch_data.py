from datagovindia import DataGovIndia
import pandas as pd
from sqlalchemy import create_engine

# Replace with your actual values
API_KEY = "YOUR_DATA_GOV_API_KEY"
RESOURCE_ID = "579b464db66ec23bdd000001d9b2e74c323e4b2742f9fe16160cbad7"
DB_CONNECTION_STRING = "postgresql://user:password@localhost:5432/educationdb"  # Replace with your Supabase connection string

# Initialize API
api = DataGovIndia(API_KEY)

# Fetch dataset
dataset = api.get_data(RESOURCE_ID)

# Convert to DataFrame
df = pd.DataFrame(dataset['records'])

# Connect to DB
engine = create_engine(DB_CONNECTION_STRING)

# Store in table
df.to_sql("education_stats", engine, if_exists='replace', index=False)

print("Data fetched and stored successfully!")
