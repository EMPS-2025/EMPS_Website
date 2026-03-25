"use client";

import styles from "../StatutoryRequirements.module.css";

export default function DocItem({ title, meta, file }) {
  return (
    <a href={file} download className={styles.docItem}>
      <div className={styles.docLeft}>
        <div className={styles.pdfBadge}>PDF</div>
        <div className={styles.docText}>
          <strong>{title}</strong>
          {meta ? <small>{meta}</small> : null}
        </div>
      </div>
      <span className={styles.arrow}>→</span>
    </a>
  );
}