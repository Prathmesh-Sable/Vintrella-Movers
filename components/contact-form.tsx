"use client";

import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// ✅ FIREBASE IMPORTS
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase"; // <-- make sure firebase.js is in src/

interface FormData {
  fullName: string;
  contactNumber: string;
  email: string;
  materialDetails: string;
  fromLocation: string;
  toLocation: string;
  transportDate: string;
}

interface FormErrors {
  fullName?: string;
  contactNumber?: string;
  email?: string;
  materialDetails?: string;
  fromLocation?: string;
  toLocation?: string;
  transportDate?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    contactNumber: "",
    email: "",
    materialDetails: "",
    fromLocation: "",
    toLocation: "",
    transportDate: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\D/g, ""))) {
      newErrors.contactNumber = "Please enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.materialDetails.trim())
      newErrors.materialDetails =
        "Please describe the items to be transported";

    if (!formData.fromLocation.trim())
      newErrors.fromLocation = "Pickup location is required";

    if (!formData.toLocation.trim())
      newErrors.toLocation = "Delivery location is required";

    if (!formData.transportDate)
      newErrors.transportDate = "Please select a transport date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // ✅ SAVE TO FIRESTORE IN "quoteRequests" COLLECTION
      await addDoc(collection(db, "quoteRequests"), {
        ...formData,
        submittedAt: new Date(),
      });

      setSubmitStatus("success");

      // CLEAR FORM
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        materialDetails: "",
        fromLocation: "",
        toLocation: "",
        transportDate: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    "border-2 border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white";
  const errorInputStyles =
    "border-2 border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20 bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* FULL NAME */}
      <div className="space-y-2">
        <Label htmlFor="fullName" className="font-medium text-gray-700">
          Customer Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          className={errors.fullName ? errorInputStyles : inputStyles}
        />
        {errors.fullName && (
          <p className="text-destructive text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* CONTACT + EMAIL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="contactNumber" className="font-medium text-gray-700">
            Contact Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.contactNumber}
            onChange={handleChange}
            className={errors.contactNumber ? errorInputStyles : inputStyles}
          />
          {errors.contactNumber && (
            <p className="text-destructive text-sm flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.contactNumber}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="font-medium text-gray-700">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? errorInputStyles : inputStyles}
          />
          {errors.email && (
            <p className="text-destructive text-sm flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* MATERIAL DETAILS */}
      <div className="space-y-2">
        <Label htmlFor="materialDetails" className="font-medium text-gray-700">
          Transport Material Details <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="materialDetails"
          name="materialDetails"
          placeholder="Describe the items you want to transport (e.g., 3 BHK household items, 2 bikes, 1 car)"
          rows={4}
          value={formData.materialDetails}
          onChange={handleChange}
          className={errors.materialDetails ? errorInputStyles : inputStyles}
        />
        {errors.materialDetails && (
          <p className="text-destructive text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.materialDetails}
          </p>
        )}
      </div>

      {/* FROM + TO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fromLocation" className="font-medium text-gray-700">
            From Location <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fromLocation"
            name="fromLocation"
            placeholder="Pickup city/address"
            value={formData.fromLocation}
            onChange={handleChange}
            className={errors.fromLocation ? errorInputStyles : inputStyles}
          />
          {errors.fromLocation && (
            <p className="text-destructive text-sm flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.fromLocation}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="toLocation" className="font-medium text-gray-700">
            To Location <span className="text-destructive">*</span>
          </Label>
          <Input
            id="toLocation"
            name="toLocation"
            placeholder="Delivery city/address"
            value={formData.toLocation}
            onChange={handleChange}
            className={errors.toLocation ? errorInputStyles : inputStyles}
          />
          {errors.toLocation && (
            <p className="text-destructive text-sm flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.toLocation}
            </p>
          )}
        </div>
      </div>

      {/* DATE */}
      <div className="space-y-2">
        <Label htmlFor="transportDate" className="font-medium text-gray-700">
          Preferred Transport Date <span className="text-destructive">*</span>
        </Label>
        <Input
          id="transportDate"
          name="transportDate"
          type="date"
          value={formData.transportDate}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          className={errors.transportDate ? errorInputStyles : inputStyles}
        />
        {errors.transportDate && (
          <p className="text-destructive text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.transportDate}
          </p>
        )}
      </div>

      {/* SUBMIT BUTTON */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent mr-2" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Submit Quote Request
          </>
        )}
      </Button>

      {/* SUCCESS MESSAGE */}
      {submitStatus === "success" && (
        <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          <CheckCircle className="h-5 w-5" />
          <p>
            Thank you! Your quote request has been submitted. We'll contact you
            shortly.
          </p>
        </div>
      )}

      {/* ERROR MESSAGE */}
      {submitStatus === "error" && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="h-5 w-5" />
          <p>Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}
    </form>
  );
}
