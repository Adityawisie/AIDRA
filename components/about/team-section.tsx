import { Card } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Dwij Pancholi",
    role: "Team Leader",
    bio: "CSE(AI/ML) 2nd year student",
  },
  {
    name: "Henil Dhobi",
    role: "Team Member",
    bio: "CSE(AI/ML) 2nd year student",
  },
  {
    name: "Ananya Jha",
    role: "Team Member",
    bio: "CSE(AI/ML) 2nd year student",
  },
  {
    name: "Suhani Sharma",
    role: "Team Member",
    bio: "CSE 2nd year student",
  },
  {
    name: "Aditya Jain",
    role: "Team Member",
    bio: "CSE 2nd year student",
  },
  {
    name: "Dhruv Jaiswal",
    role: "Team Member",
    bio: "ECE 2nd year student",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A dedicated team of students specializing in AI/ML and related fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
