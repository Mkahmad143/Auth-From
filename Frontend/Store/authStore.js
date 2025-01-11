import { create } from "zustand";
import axios from "axios";
import { VerifiedIcon } from "lucide-react";
import { data } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;
const URL = "/api/auth";

axios.defaults.withCredentials = true;
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (name, email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}${URL}/signup`, {
        name,
        password,
        email,
      });

      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error Signing in by Server",
        isLoading: false,
      });
      console.log(error.response.data.message);
      throw error;
    }
  },
  verifyEmail: async (verificationCode) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}${URL}/verify-email`, {
        verificationCode,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message || "Error Verifying in by Server",
      });
      throw error;
    }
  },
}));
