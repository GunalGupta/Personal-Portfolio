"use client";
import React, { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookieManager";
import { get } from "http";

export default function getmyCookie() {
    if (typeof document === "undefined") return null;
    return getCookie("selectedTheme");
}