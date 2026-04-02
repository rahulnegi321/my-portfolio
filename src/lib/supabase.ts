import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase environment variables are not set");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  long_description?: string;
  image_url?: string;
  thumbnail_url?: string;
  category: string;
  status: string;
  live_url?: string;
  github_url?: string;
  problem_statement?: string;
  solution_approach?: string;
  impact?: string;
  metrics?: Record<string, any>;
  featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type ProjectTechnology = {
  id: string;
  project_id: string;
  technology: string;
  proficiency_level: string;
  created_at: string;
};

export type Skill = {
  id: string;
  category: string;
  name: string;
  proficiency_level: number;
  years_of_experience?: number;
  icon_name?: string;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  description: string;
  period_start: string;
  period_end?: string;
  current: boolean;
  achievements?: string[];
  technologies?: string[];
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type Testimonial = {
  id: string;
  author_name: string;
  author_title?: string;
  author_image_url?: string;
  content: string;
  company?: string;
  date_given?: string;
  created_at: string;
};

export async function fetchProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function fetchFeaturedProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .order("display_order", { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function fetchProjectWithTechnologies(
  projectId: string
): Promise<(Project & { technologies: ProjectTechnology[] }) | null> {
  const { data: project, error: projectError } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .maybeSingle();

  if (projectError) throw projectError;
  if (!project) return null;

  const { data: technologies, error: techError } = await supabase
    .from("project_technologies")
    .select("*")
    .eq("project_id", projectId);

  if (techError) throw techError;

  return { ...project, technologies: technologies || [] };
}

export async function fetchSkills(): Promise<Skill[]> {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("category", { ascending: true })
    .order("display_order", { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function fetchExperiences(): Promise<Experience[]> {
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("date_given", { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function trackAnalytics(
  eventType: string,
  data?: Record<string, any>
): Promise<void> {
  try {
    await supabase.from("portfolio_analytics").insert({
      event_type: eventType,
      ...data,
    });
  } catch (error) {
    console.error("Analytics tracking failed:", error);
  }
}
