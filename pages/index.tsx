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
      <div className="w-full h-screen flex flex-col justify-center mx-auto max-w-lg items-center p-4">
        <h1 className="text-center font-semibold text-xl mb-6">
          Todo App for AsvaLabs
        </h1>
        <Auth supabaseClient={supabase} />
      </div>
    </>
  );
};

export default TodosContainer;
