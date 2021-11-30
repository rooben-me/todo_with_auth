import React from "react";

import { supabase } from "../lib/initSupabase";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";

interface ITodosContainerProps {}

const TodosContainer: React.FunctionComponent<ITodosContainerProps> = () => {
  const router = useRouter();
  supabase.auth.onAuthStateChange((event, session) => {
    router.push("/todo");
  });
  return (
    <>
      <div className="w-full h-screen flex justify-center mx-auto max-w-lg items-center p-4">
        <Auth
          supabaseClient={supabase}
          providers={["google", "github"]}
          socialLayout="vertical"
          socialButtonSize="xlarge"
        />
      </div>
    </>
  );
};

export default TodosContainer;
