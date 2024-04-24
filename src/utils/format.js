import React from "react";

class FormatUtil {
  static formatDate(dateString) {
    const dateObject = new Date(dateString);

    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  static formatDateString(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options).replace(",", "");
  }
}

export { FormatUtil as default };
