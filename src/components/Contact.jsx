import { Mail, Github, Linkedin, Twitter, MapPin, Send, Loader2, CheckCircle, AlertCircle, MessageSquare } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { cn } from "../lib/utils"

const contactInfo = [
  { label: "Email", value: "dev@example.com", icon: Mail, href: "mailto:dev@example.com", color: "from-blue-500 to-cyan-500" },
  { label: "GitHub", value: "github.com/username", icon: Github, href: "https://github.com", color: "from-gray-500 to-gray-700" },
  { label: "LinkedIn", value: "linkedin.com/in/username", icon: Linkedin, href: "https://linkedin.com", color: "from-blue-600 to-blue-800" },
  { label: "Twitter", value: "@username", icon: Twitter, href: "https://twitter.com", color: "from-sky-500 to-blue-500" },
  { label: "Location", value: "San Francisco, CA", icon: MapPin, href: null, color: "from-red-500 to-pink-500" },
]

const fieldConfig = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name", icon: "User", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "your@email.com", icon: "Mail", required: true },
  { name: "message", label: "Message", type: "textarea", placeholder: "What's on your mind?", icon: "MessageSquare", required: true, rows: 5 },
]

function validateField(name, value) {
  switch (name) {
    case "name":
      return value.trim().length >= 2 ? "" : "Name must be at least 2 characters"
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email"
    case "message":
      return value.trim().length >= 10 ? "" : "Message must be at least 10 characters"
    default:
      return ""
  }
}

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState("idle")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = {}
    let hasErrors = false
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
        hasErrors = true
      }
    })
    
    setErrors(newErrors)
    setTouched({ name: true, email: true, message: true })
    
    if (hasErrors) return

    setStatus("submitting")
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus("success")
    setFormData({ name: "", email: "", message: "" })
    setTouched({})
    setTimeout(() => setStatus("idle"), 4000)
  }

  const isFormValid = formData.name.trim().length >= 2 && 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && 
    formData.message.trim().length >= 10

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-all duration-200 group"
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={cn("p-2 rounded-lg flex-shrink-0", `bg-gradient-to-br ${item.color}`)}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            <Card className="glass hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: "Open to new opportunities", color: "bg-green-500", pulse: true },
                  { label: "Available for freelance", color: "bg-blue-500", pulse: false },
                  { label: "Open to collaborations", color: "bg-purple-500", pulse: false },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <motion.div
                      className={cn("w-3 h-3 rounded-full", item.color)}
                      animate={{ scale: item.pulse ? [1, 1.3, 1] : 1 }}
                      transition={{ duration: item.pulse ? 1.5 : 0, repeat: item.pulse ? Infinity : 0 }}
                    />
                    <span>{item.label}</span>
                  </motion.div>
                ))}
                <motion.p
                  className="text-sm text-muted-foreground mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Typically respond within 24 hours
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <motion.div
                    className="grid sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {fieldConfig.slice(0, 2).map((field) => (
                      <FormField
                        key={field.name}
                        field={field}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched[field.name] ? errors[field.name] : undefined}
                        disabled={status === "submitting"}
                      />
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <FormField
                      field={fieldConfig[2]}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.message ? errors.message : undefined}
                      disabled={status === "submitting"}
                    />
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full sm:w-auto gap-2"
                        disabled={status === "submitting" || !isFormValid}
                      >
                        <AnimatePresence mode="wait">
                          {status === "submitting" ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0, rotate: -90 }}
                              animate={{ opacity: 1, rotate: 0 }}
                              exit={{ opacity: 0, rotate: 90 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Sending...
                            </motion.div>
                          ) : status === "success" ? (
                            <motion.div
                              key="success"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                            >
                              Message Sent!
                              <CheckCircle className="h-4 w-4" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="default"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              Send Message
                              <Send className="h-4 w-4" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.button>

                    <AnimatePresence>
                      {status === "success" && (
                        <motion.div
                          key="success-message"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1"
                        >
                          <CheckCircle className="h-4 w-4" />
                          Thanks for reaching out! I'll get back to you soon.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function FormField({ field, value, onChange, onBlur, error, disabled }) {
  const inputClass = cn(
    "w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 placeholder:text-muted-foreground",
    error ? "border-destructive focus:ring-destructive/50" : "border-input hover:border-border/50",
    disabled && "opacity-50 cursor-not-allowed"
  )

  if (field.type === "textarea") {
    return (
      <div>
        <label htmlFor={field.name} className="block text-sm font-medium mb-1">
          {field.label}
        </label>
        <textarea
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={field.required}
          rows={field.rows}
          className={cn(inputClass, "resize-none")}
          placeholder={field.placeholder}
          disabled={disabled}
        />
        {error && (
          <motion.p
            className="text-sm text-destructive mt-1 flex items-center gap-1"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle className="h-3 w-3" />
            {error}
          </motion.p>
        )}
      </div>
    )
  }

  return (
    <div>
      <label htmlFor={field.name} className="block text-sm font-medium mb-1">
        {field.label}
      </label>
      <Input
        id={field.name}
        name={field.name}
        type={field.type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={field.required}
        className={inputClass}
        placeholder={field.placeholder}
        disabled={disabled}
      />
      {error && (
        <motion.p
          className="text-sm text-destructive mt-1 flex items-center gap-1"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="h-3 w-3" />
          {error}
        </motion.p>
      )}
    </div>
  )
}