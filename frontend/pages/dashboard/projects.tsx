import DashBoardLayout from "@/components/DashBoardLayout";
import ProjectForm from "@/components/Dashboard/Project/ProjectForm";
const TextEditor = dynamic(
  () => {
    return import("@/components/common/TextEditor");
  },
  { ssr: false }
);
import ProjectMedia from "@/components/Dashboard/Project/ProjectMedia";
import BreadCrumb from "@/components/common/BreadCrumb";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EditorState, convertToRaw } from "draft-js";
import convertToHTML from "draftjs-to-html";

const Projects: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const html = convertToHTML(rawContentState);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {console.log(data)});
  return (
    <DashBoardLayout>
      <BreadCrumb pathName="Projects" />
      <div className="bg-white shadow-md p-3 md:p-6 rounded-md">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-start gap-2 mt-5 w-full px-4 sm:px-0 lg:max-w-2xl mx-auto md:space-y-2 pb-4"
        >
          <ProjectMedia register={register} />
          <ProjectForm register={register} errors={errors} />
          <div className="w-full">
            <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
              Description
            </p>
            <div className="w-full border">
              <TextEditor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-neutral text-white px-8 py-2 rounded-full mt-2 flex items-center"
          >
            {loading && (
              <span className="w-[20px] h-[20px] border-4 border-slate-200 border-b-white rounded-full mr-2 animate-spin" />
            )}
            Upload
          </button>
        </form>
      </div>
    </DashBoardLayout>
  );
};

export default Projects;
