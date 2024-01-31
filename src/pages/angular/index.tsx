import { DockerizerLayout } from "@/components/Layout";
import { FormInput, FormSelect } from "@/components/ui/form-fields";
import {
  defaultValues,
  generate,
  nginxImageOptions,
  nodeImageOptions,
  schema,
} from "@/dockerizers/angular";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function Page() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <DockerizerLayout title="Angular" form={form} generate={generate}>
      <div className="grid md:grid-cols-3 gap-6">
        <FormInput
          control={form.control}
          name="projectName"
          label="Project Name"
          inputProps={{
            placeholder: "myApp",
          }}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <FormSelect
          control={form.control}
          name="nodeImage"
          label="Node image"
          options={nodeImageOptions}
        />
        <FormSelect
          control={form.control}
          name="nginxImage"
          label="Nginx image"
          options={nginxImageOptions}
        />
        <FormInput
          control={form.control}
          name="port"
          label="Port"
          inputProps={{
            placeholder: "80",
            type: "number",
          }}
        />
      </div>
    </DockerizerLayout>
  );
}
