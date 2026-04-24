"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";

interface WaitlistFormProps {
  source?: string;
  compact?: boolean;
}

export default function WaitlistForm({
  source = "hero",
  compact = false,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "duplicate" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      if (data.message?.includes("already")) {
        setStatus("duplicate");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  };

  const isSubmitted = status === "success" || status === "duplicate";

  return (
    <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className={`flex flex-col sm:flex-row items-stretch gap-3 w-full ${
            compact ? "max-w-md" : "max-w-lg"
          } mx-auto`}
        >
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="your@email.com"
              required
              disabled={status === "loading"}
              className={`
                w-full px-5 ${compact ? "py-3" : "py-4"} rounded-lg
                bg-charcoal/60 border text-cream
                placeholder:text-cream/25
                font-body text-sm
                outline-none transition-all duration-300
                disabled:opacity-60
                ${
                  status === "error"
                    ? "border-loss-red/60 shadow-[0_0_12px_rgba(230,57,70,0.2)]"
                    : isFocused
                      ? "border-amber/60 shadow-[0_0_16px_rgba(255,182,39,0.2),0_0_32px_rgba(255,182,39,0.1)]"
                      : "border-smoke/50 hover:border-smoke"
                }
              `}
            />
            {isFocused && (
              <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  boxShadow:
                    "inset 0 1px 0 rgba(255, 182, 39, 0.1), 0 0 24px rgba(255, 182, 39, 0.08)",
                }}
              />
            )}
          </div>

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              px-8 ${compact ? "py-3" : "py-4"} rounded-lg
              bg-amber text-void font-semibold text-sm
              uppercase tracking-wide
              hover:bg-hot-core hover:shadow-[0_0_24px_rgba(255,182,39,0.5)]
              active:bg-deep-edge
              transition-all duration-300
              glow-pulse cursor-pointer
              disabled:opacity-60 disabled:cursor-wait
              relative overflow-hidden
            `}
          >
            <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/20 to-transparent opacity-60 pointer-events-none" />
            <span className="relative z-10">
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </span>
          </motion.button>

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-loss-red text-xs absolute -bottom-6 left-0"
            >
              {errorMsg}
            </motion.p>
          )}
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9, filter: "brightness(2)" }}
          animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-4 py-2"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.68, -0.55, 0.27, 1.55],
            }}
            className="w-14 h-14 rounded-full bg-amber/10 border-2 border-amber flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 24px rgba(255, 182, 39, 0.5), 0 0 64px rgba(255, 182, 39, 0.2)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-amber">
              <motion.path
                d="M5 13L9 17L19 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              />
            </svg>
          </motion.div>

          <span className="font-headline text-xl md:text-2xl text-amber uppercase">
            {status === "duplicate" ? "YOU'RE ALREADY IN" : "YOU'RE IN"}
          </span>
          <p className="text-cream/50 text-sm">
            We&apos;ll send your early access invite to{" "}
            <span className="text-cream/70">{email}</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
