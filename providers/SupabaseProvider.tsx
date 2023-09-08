"use client";

import { Database } from "@/types_db";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface SupabaseProverProps {
  children: React.ReactNode;
}

const SupaBaseProvider: React.FC<SupabaseProverProps> = ({ children }) => {
  const [supabaseClient] = useState(
    () => createClientComponentClient<Database>
  );
};
