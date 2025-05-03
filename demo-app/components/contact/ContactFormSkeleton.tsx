import InputFieldSkeleton from "../skeletons/InputFieldSkeleton";
import TextAreaFieldSkeleton from "../skeletons/TextAreaFieldSkeleton";
import SubmitButtonSkeleton from "../skeletons/SubmitButtonSkeleton";

export default function ContactFormSkeleton() {
  return (
    <div className="card animate-pulse">
      <div className="h-2 w-full bg-emerald-500" />
      <div className="p-10 flex flex-col items-center">
        <div className="h-8 w-1/2 skeleton-title" />
        <div className="h-4 w-2/3 skeleton-subtitle" />
        <div className="w-full space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputFieldSkeleton />
            <InputFieldSkeleton />
          </div>
          <InputFieldSkeleton />
          <TextAreaFieldSkeleton />
          <SubmitButtonSkeleton />
        </div>
      </div>
    </div>
  );
}
