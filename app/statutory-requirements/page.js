"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./StatutoryRequirements.module.css";
import FlipCard from "./components/FlipCard";
import ProtectedForm4Card from "./components/ProtectedForm4Card";

const AuthorizationForm = dynamic(
  () => import("./components/AuthorizationForm"),
  {
    ssr: false,
    loading: () => (
      <div className={styles.authOverlay}>
        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <h3>Loading...</h3>
            <p>Please wait while the access form opens.</p>
          </div>
        </div>
      </div>
    ),
  }
);

const licenseDocs = [
  {
    title: "Trading License Grant Order",
    meta: "Aug 01, 2025",
    file: "/documents/EMPS_Trading_License.pdf",
  },
];

const form4Docs = [
  {
    title: "January 2026",
    // meta: "January 2026",
    file: "/documents/January_26_form_IV.pdf",
  },
  {
    title: "December 2025",
    // meta: "December 2025",
    file: "/documents/Form_IV_DEC_2025.pdf",
  },
  {
    title: "November 2025",
    // meta: "November 2025",
    file: "/documents/FORM_IV_NOV_2025.pdf",
  },
];

export default function StatutoryRequirements() {
  const [openCard, setOpenCard] = useState(null);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isForm4Authorized, setIsForm4Authorized] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  useEffect(() => {
    const unlocked = localStorage.getItem("form4Authorized");
    if (unlocked === "true") {
      setIsForm4Authorized(true);
    }
  }, []);

  const handleToggle = (cardName) => {
    setOpenCard((prev) => (prev === cardName ? null : cardName));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleAuthorizationSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.company.trim()) {
      setError("Please enter your company name.");
      return;
    }

    if (!validateEmail(formData.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          organization: formData.company,
          message: "User requested access to Statutory Requirements documents.",
          type: "statutory_access",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Authorization failed");
      }

      setIsForm4Authorized(true);
      localStorage.setItem("form4Authorized", "true");
      setShowAuthForm(false);
      setOpenCard("form4");

      setFormData({
        name: "",
        email: "",
        company: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>

      {showAuthForm && (
        <AuthorizationForm
          formData={formData}
          setFormData={setFormData}
          error={error}
          isSubmitting={isSubmitting}
          onSubmit={handleAuthorizationSubmit}
          onCancel={() => {
            setShowAuthForm(false);
            setError("");
          }}
        />
      )}

      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>
            <span>Statutory Requirements</span>
          </h1>
          <p>
            Energy Minds Power Solutions maintains strict adherence to CERC
            regulations. Securely access our trading license documents and monthly
            Form-IV submissions below.
          </p>
        </div>

        <div className={styles.grid}>
          <FlipCard
            title="Licenses & Orders"
            frontName="Licenses"
            docs={licenseDocs}
            isOpen={openCard === "licenses"}
            onToggle={() => handleToggle("licenses")}
          />

          <ProtectedForm4Card
            title="Form IV Filings"
            frontName="Form IV"
            docs={form4Docs}
            isOpen={openCard === "form4"}
            onToggle={() => handleToggle("form4")}
            isAuthorized={isForm4Authorized}
            onRequestAccess={() => {
              setShowAuthForm(true);
              setError("");
            }}
          />
        </div>
      </div>
    </section>
  );
}