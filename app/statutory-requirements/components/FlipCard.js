"use client";

import styles from "../StatutoryRequirements.module.css";
import DocItem from "./DocItem";

export default function FlipCard({
  title,
  label,
  frontName,
  docs,
  isOpen,
  onToggle,
}) {
  return (
    <div className={`${styles.flipCard} ${isOpen ? styles.mobileOpen : ""}`}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <div className={styles.cardHeader}>
            <span className={styles.star}>✦</span>
            <h3>{title}</h3>
          </div>

          <div className={styles.frontCenter}>
            <div className={styles.folderWrap}>
              <div className={styles.folderTab}></div>
              <div className={styles.folderBody}>{frontName}</div>
            </div>
            <p className={styles.frontNote}>
              Hover to open and view downloadable documents.
            </p>
          </div>
        </div>

        <div className={styles.flipCardBack}>
          <div className={styles.cardHeader}>
            <span className={styles.star}>✦</span>
            <h3>{title}</h3>
          </div>

          {label ? <div className={styles.groupLabel}>{label}</div> : null}

          <div className={styles.docList}>
            {docs.map((doc, index) => (
              <DocItem key={index} {...doc} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.mobileCard}>
        <button
          type="button"
          className={styles.mobileHeader}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={`Toggle ${title}`}
        >
          <div className={styles.mobileHeaderLeft}>
            <span className={styles.star}>✦</span>
            <h3>{title}</h3>
          </div>

          <span
            className={`${styles.mobileChevron} ${
              isOpen ? styles.mobileChevronOpen : ""
            }`}
          >
            ▾
          </span>
        </button>

        <div className={styles.mobileFrontPreview}>
          <div className={styles.folderWrap}>
            <div className={styles.folderTab}></div>
            <div className={styles.folderBody}>{frontName}</div>
          </div>
          <p className={styles.frontNote}>Tap to view downloadable documents.</p>
        </div>

        <div
          className={`${styles.mobileContent} ${
            isOpen ? styles.mobileContentOpen : ""
          }`}
        >
          {label ? <div className={styles.groupLabel}>{label}</div> : null}

          <div className={styles.docList}>
            {docs.map((doc, index) => (
              <DocItem key={index} {...doc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}