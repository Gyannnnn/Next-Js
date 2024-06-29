"use server";
export const handleSubmit = async (e) => {
  console.log(e.get("name"), e.get("add"));
};
