"use server";

import prisma from "@/lib/prisma";
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from "@/schema/workflows";
import { WorkflowStatus } from "@/types/workflow";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { AppNode } from "@/types/appNode";
import { CreateFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskType } from "@/types/task";
import { Edge } from "@xyflow/react";


export async function CreateWorkflow(form: createWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);
  if (!success) {
    throw new Error("Invalid input");
  }

  const { userId } = await auth();

  if (!userId) {
    throw new Error("unathenticated");
  }

  const initialFlow: { nodes: AppNode[]; edges: Edge[]} = {
    nodes: [],
    edges: [],
  };

  initialFlow.nodes.push(CreateFlowNode(TaskType.LAUNCH_BROWSER));

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: JSON.stringify(initialFlow),
      ...data,
    },
  });
  if (!result) {
    throw new Error("Failed to create workflow");
  }

  redirect(`/workflow/editor/${result.id}`);
}
