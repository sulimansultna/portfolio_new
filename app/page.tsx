"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Smartphone,
  Wifi,
  Code2,
  Palette,
  GitBranch,
  Database,
  Info,
} from "lucide-react"
import Navigation from "./components/navigation"
import ThreeBackground from "./components/three-background"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [currentLanguage, setCurrentLanguage] = useState(0)
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const nameLanguages = [
    { lang: "English", name: "Suliman Sultan", script: "latin" },
    { lang: "Pashto", name: "سلیمان سلطان", script: "arabic" },
    { lang: "Urdu", name: "سلیمان سلطان", script: "arabic" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % nameLanguages.length)
    }, 3000) // Change language every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const skills = [
    { name: "Flutter", level: 95, icon: <Smartphone className="h-5 w-5" /> },
    { name: "Firebase", level: 90, icon: <Database className="h-5 w-5" /> },
    { name: "Dart", level: 92, icon: <Code2 className="h-5 w-5" /> },
    { name: "IoT", level: 85, icon: <Wifi className="h-5 w-5" /> },
    { name: "Git", level: 88, icon: <GitBranch className="h-5 w-5" /> },
    { name: "UI/UX Design", level: 82, icon: <Palette className="h-5 w-5" /> },
  ]

  const projects = [
    {
      title: "Gas Level Detection & Auto Booking System",
      description:
        "IoT-based smart solution that monitors gas levels using sensors and automatically books refills when needed, featuring real-time notifications and mobile app integration",
      image: "/images/gas-detection.png",
      tech: ["Flutter", "Firebase", "IoT", "NodeMCU", "GSM"],
      github: "https://github.com/sulimansultna",
      demo: "#",
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "Full-featured shopping app with real-time inventory management, secure payment integration, and intuitive user experience following Nielsen's usability principles",
      image: "/images/ecommerce-app.png",
      tech: ["Flutter", "Firebase", "Stripe", "UI/UX"],
      github: "https://github.com/sulimansultna",
      demo: "#",
    },
    {
      title: "Academy Portal App",
      description:
        "Comprehensive educational platform for academy management with student enrollment, course tracking, assignments, and progress monitoring features",
      image: "/images/academy-portal.png",
      tech: ["Flutter", "Firebase", "Dart", "UI/UX"],
      github: "https://github.com/sulimansultna",
      demo: "#",
    },
  ]

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("sending")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("sent")
      setTimeout(() => setFormStatus("idle"), 3000)
    }, 1000)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Heuristic 2: Match between system and real world - Clear navigation */}
      <Navigation activeSection={activeSection} />

      {/* Heuristic 4: Consistency and standards - Consistent hero layout */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ThreeBackground />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 transition-all duration-500">
              Hi, I'm{" "}
              <span
                className={`gradient-text transition-all duration-500 ${
                  nameLanguages[currentLanguage].script === "arabic" ? "font-arabic" : ""
                }`}
                style={{
                  fontFamily:
                    nameLanguages[currentLanguage].script === "arabic" ? "Noto Sans Arabic, system-ui" : "inherit",
                }}
              >
                {nameLanguages[currentLanguage].name}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-2">
              (<span className="text-primary">Suli</span>)
            </p>
            {/* Heuristic 1: Visibility of system status - Language indicator */}
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground">{nameLanguages[currentLanguage].lang}</span>
              <div className="flex gap-1">
                {nameLanguages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentLanguage ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-muted-foreground">
            Mobile App & IoT Developer | Flutter & Firebase Specialist
          </h2>

          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Computer Science graduate passionate about building smart, practical, and beautiful mobile applications that
            solve real-world problems.
          </p>

          {/* Heuristic 6: Recognition rather than recall - Clear action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" aria-label="Contact me for hiring">
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent"
              aria-label="Download my resume"
            >
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Heuristic 8: Aesthetic and minimalist design - Clean project showcase */}
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Real-world solutions combining mobile development with IoT innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - Screenshot showing the application interface`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* Heuristic 7: Flexibility and efficiency of use - Multiple access points */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Heuristic 4: Consistency and standards - Consistent skill display */}
      <section id="skills" className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">Technologies I use to bring ideas to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-primary" aria-hidden="true">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <span
                    className="text-sm font-medium text-muted-foreground"
                    aria-label={`${skill.name} proficiency: ${skill.level} percent`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-2" aria-label={`${skill.name} skill level`} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Updated About Section */}
      <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">My journey in mobile app development and IoT innovation</p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm Suliman Sultan — but you can call me Suli! I'm a Computer Science graduate and a passionate Mobile
            App Developer focused on building smart, practical, and beautiful apps using Flutter and Firebase.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            From designing sleek interfaces to integrating real-time backend services, I enjoy turning ideas into fully
            functional mobile applications. My work often connects the digital and physical world — especially through
            IoT-based solutions that automate everyday tasks, such as my Gas Level Detection & Auto Booking System.
          </p>

          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">🔧 I love working with:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Flutter</strong> for cross-platform development
              </li>
              <li>
                <strong>Firebase</strong> for scalable backend solutions
              </li>
              <li>
                <strong>IoT components</strong> like NodeMCU, sensors, and GSM modules
              </li>
              <li>
                <strong>User-focused UI/UX</strong>, following best practices like Nielsen's heuristics
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            I'm always learning, experimenting, and solving real-world problems through code. Whether it's building an
            inventory system, a booking app, or a sensor-powered smart solution — I strive to deliver products that are
            both useful and user-friendly.
          </p>

          <p className="text-lg leading-relaxed">
            💬 If you're interested in collaborating, feel free to connect — I'm open to freelance projects, team
            contributions, or innovative ideas that push boundaries.
          </p>
        </div>
      </section>

      {/* Heuristic 9: Help users recognize, diagnose, and recover from errors - Form validation */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Let's discuss your next mobile app or IoT project</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you need a mobile app, IoT
                solution, or just want to chat about tech, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  <a href="mailto:imsulimansultan@gmail.com" className="hover:text-primary transition-colors">
                    imsulimansultan@gmail.com
                  </a>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://github.com/sulimansultna"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit my GitHub profile"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.linkedin.com/in/suliman-sultan-a8873a2a4"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with me on LinkedIn"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <Input placeholder="Your Name" required aria-label="Your full name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required aria-label="Your email address" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[120px]" required aria-label="Your message" />
                </div>

                {/* Heuristic 1: Visibility of system status - Form feedback */}
                {formStatus === "sent" && (
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>Message sent successfully! I'll get back to you soon.</AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={formStatus === "sending"}
                  aria-label={formStatus === "sending" ? "Sending message..." : "Send message"}
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Heuristic 5: Error prevention - Clear call-to-action section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Explore My Projects</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the innovative mobile applications and IoT solutions I've built. Each project represents a unique
            challenge solved with cutting-edge technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="group cursor-pointer" role="button" tabIndex={0}>
              <div className="bg-card rounded-lg p-6 border hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Smartphone className="h-6 w-6 text-blue-500" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-2">Mobile Apps</h3>
                <p className="text-sm text-muted-foreground">Flutter-powered cross-platform applications</p>
              </div>
            </div>

            <div className="group cursor-pointer" role="button" tabIndex={0}>
              <div className="bg-card rounded-lg p-6 border hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Wifi className="h-6 w-6 text-purple-500" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-2">IoT Solutions</h3>
                <p className="text-sm text-muted-foreground">Smart connected device ecosystems</p>
              </div>
            </div>

            <div className="group cursor-pointer" role="button" tabIndex={0}>
              <div className="bg-card rounded-lg p-6 border hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Database className="h-6 w-6 text-green-500" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-2">Backend Systems</h3>
                <p className="text-sm text-muted-foreground">Firebase and cloud-based solutions</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById("projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              aria-label="Scroll to view all projects"
            >
              View All Projects
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
              <a
                href="https://github.com/sulimansultna"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub portfolio"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub Portfolio
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Heuristic 10: Help and documentation - Clear footer with navigation */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Suliman Sultan. Built with Next.js and Three.js</p>
          <div className="mt-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" aria-label="View interactive dashboard">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
