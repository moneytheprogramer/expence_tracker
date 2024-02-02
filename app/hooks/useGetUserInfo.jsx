"use client";
export const useGetUserInfo = () => {
    const ISSERVER = typeof window === "undefined";

    if (!ISSERVER) {
        try {
            const authData = JSON.parse(localStorage.getItem("auth")) || {};
            const { name, profilePhoto, userID, isAuth } = authData;
            return { name, profilePhoto, userID, isAuth };
        } catch (error) {
            console.error("Error parsing user information:", error);
            // Handle the error or return a default value as needed
        }
    }

    // Return a default value or handle the server-side case as needed
    return { name: "", profilePhoto: "", userID: "", isAuth: false };
};

