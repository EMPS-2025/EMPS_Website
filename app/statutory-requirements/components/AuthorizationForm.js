"use client";

import styles from "../StatutoryRequirements.module.css";

export default function AuthorizationForm({
    formData,
    setFormData,
    error,
    isSubmitting,
    onSubmit,
    onCancel,
}) {
    return (
        <div className={styles.authOverlay}>
            <div className={styles.authCard}>
                <div className={styles.authHeader}>
                    <h3>Authorized Access Required</h3>
                    <p>Please fill in your details to access Form IV Filings documents.</p>
                </div>

                <form onSubmit={onSubmit} className={styles.authForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, name: e.target.value }))
                            }
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Work Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your work email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, email: e.target.value }))
                            }
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="company">Company Name</label>
                        <input
                            id="company"
                            type="text"
                            placeholder="Enter your company name"
                            value={formData.company}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, company: e.target.value }))
                            }
                        />
                    </div>


                    {error ? <p className={styles.formError}>{error}</p> : null}

                    <div className={styles.authActions}>
                        <button
                            type="button"
                            className={styles.cancelBtn}
                            onClick={onCancel}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={
                                isSubmitting ||
                                !formData.name.trim() ||
                                !formData.company.trim() ||
                                !formData.email.trim()
                            }
                        >
                            {isSubmitting ? "Unlocking..." : "Unlock Documents"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}