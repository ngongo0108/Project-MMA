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
  static formateDateAndTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${hours}:${minutes} ${day}-${month}-${year}`;
  }
  static formatDola(amount) {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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
