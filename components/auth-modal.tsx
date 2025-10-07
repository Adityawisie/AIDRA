"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { supabase } from "@/lib/supabase"
import { Eye, EyeOff } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(false) // Default to sign up
  const [isOtpLogin, setIsOtpLogin] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const getPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const passwordStrength = getPasswordStrength(password)

  const handleSendOtp = async () => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
      })
      if (error) throw error
      setOtpSent(true)
    } catch (error) {
      console.error("OTP send error:", error)
      alert("Failed to send OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'email',
      })
      if (error) throw error
      onClose()
      router.push("/chatbot")
    } catch (error) {
      console.error("OTP verify error:", error)
      alert("Invalid OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      if (isLogin) {
        if (isOtpLogin) {
          if (!otpSent) {
            await handleSendOtp()
          } else {
            await handleVerifyOtp()
          }
        } else {
          const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
          })
          if (error) throw error
          onClose()
          router.push("/chatbot")
        }
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
            },
          },
        })
        if (error) throw error
        alert("Please check your email for confirmation link.")
        onClose()
      }
    } catch (error) {
      console.error("Auth error:", error)
      alert("Authentication failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background/80 backdrop-blur-xl border border-white/20 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {isLogin ? (isOtpLogin ? "Login with OTP" : "Login") : "Sign Up"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          {isLogin && isOtpLogin ? (
            <>
              {!otpSent ? (
                <Button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={loading}
                  suppressHydrationWarning
                >
                  {loading ? "Sending..." : "Send OTP"}
                </Button>
              ) : (
                <>
                  <div>
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      id="otp"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={loading}
                    suppressHydrationWarning
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </Button>
                </>
              )}
            </>
          ) : (
            <>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                    suppressHydrationWarning
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {!isLogin && (
                  <div className="mt-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded ${
                            i < passwordStrength ? "bg-green-500" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-white/70 mt-1">
                      {passwordStrength < 3 ? "Weak" : passwordStrength < 4 ? "Medium" : "Strong"}
                    </p>
                  </div>
                )}
              </div>
              {!isLogin && (
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              )}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={loading}
                suppressHydrationWarning
              >
                {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
              </Button>
            </>
          )}
        </form>
        <div className="text-center space-y-2">
          {isLogin && (
            <button
              type="button"
              onClick={() => setIsOtpLogin(!isOtpLogin)}
              className="text-sm text-primary hover:underline"
            >
              {isOtpLogin ? "Login with Password" : "Login with OTP"}
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin)
              setIsOtpLogin(false)
              setOtpSent(false)
              setOtp("")
            }}
            className="text-sm text-primary hover:underline"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
