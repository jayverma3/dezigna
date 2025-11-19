# Contact Form Fixes TODO

## 1. Update ContactForm.jsx

- Add selectedTime state
- Modify DatePicker to include time selection (showTimeSelect)
- Combine selectedDate and selectedTime into scheduledDateTime (ISO string)
- Update formData to use scheduledDateTime instead of scheduledDate

## 2. Update contact_form_handler.php

- Change JSON parsing to handle flat structure (no nested objects)
- Update table creation to dezigna_consultancy with correct fields
- Update insert query to match form data fields
- Change scheduledDate to scheduledDateTime as DATETIME

## 3. Testing

- Deploy updated PHP file
- Test form submission
- Check phpMyAdmin for data insertion
- Verify no 400 errors
