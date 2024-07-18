import { html } from "htm/react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

export default ({
  title,
  message,
  label,
  initialResponse = "",
  onResponse,
  onCancel,
}) => {
  const [text, setText] = useState(initialResponse);

  return html`
    <${Dialog}
      open=${true}
      aria-labelledby="prompt-title"
      aria-describedby="prompt-message"
      onClose=${onCancel}
    >
      <${DialogTitle} id="prompt-title"> ${title} </${DialogTitle}>
      <${DialogContent}>
        ${
          message &&
          html`
          <${DialogContentText} id="prompt-message">
            ${message}
          </${DialogContentText}>
        `
        }
        <${TextField}
          autoFocus
          margin="dense"
          label=${label}
          value=${text}
          onChange=${(e) => setText(e.target.value)}
        />
      </${DialogContent}>
      <${DialogActions}>
        <${Button} onClick=${onCancel}> Cancel </${Button}>
        <${Button} onClick=${() => onResponse(text)}> OK </${Button}>
      </${DialogActions}>
    </${Dialog}>
  `;
};
