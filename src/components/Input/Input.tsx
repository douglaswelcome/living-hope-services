import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  className = ""
}) => {
  const isTextarea = type === "textarea";
  
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
        {required && <span className={styles.requiredIcon}>■</span>}
      </label>
      
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={styles.textarea}
          rows={4}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default Input;
