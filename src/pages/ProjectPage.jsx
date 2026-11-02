import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import projects from "../data/projects";
import ProjectDetail from "../components/section/projects/ProjectDetail";

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  const handleBack = () => {
    if (location.state?.fromProjects) {
      navigate(-1);
      return;
    }

    navigate("/#projects");
  };

  if (!project) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#05070d] px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Project Not Found
          </p>

          <h1 className="mt-3 text-3xl font-black text-white">
            Project tidak ditemukan
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Maaf, proyek yang kamu cari tidak tersedia.
          </p>

          <button
            type="button"
            onClick={() => navigate("/#projects")}
            className="mt-7 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            Back to Projects
          </button>
        </div>
      </section>
    );
  }

  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <ProjectDetail project={project} onClose={handleBack} />
    </motion.div>
  );
};

export default ProjectPage;
