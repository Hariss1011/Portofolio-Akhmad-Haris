import {
  FaCertificate,
  FaExternalLinkAlt,
  FaRegCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const CertificateCard = ({ certificate }) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#121d30] via-[#101827] to-[#0d1422] shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-950/25">
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-blue-500/70 via-cyan-400/70 to-blue-500/20 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Certificate image */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.07] bg-[#0b1220]">
        {certificate.image ? (
          <div className="flex h-full w-full items-center justify-center p-3 sm:p-4">
            <img
              src={certificate.image}
              alt={`Certificate: ${certificate.title}`}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
            />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#17243b] via-[#111c31] to-[#0b1220]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-cyan-500/[0.06] text-3xl text-blue-300 shadow-lg shadow-blue-950/20">
              <FaCertificate />
            </div>

            <span className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Certificate
            </span>
          </div>
        )}

        {/* Soft image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220]/20 via-transparent to-white/[0.025]" />

        {/* Category */}
        {certificate.category && (
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-[#080d19]/80 px-3 py-1.5 text-[11px] font-semibold text-slate-200 shadow-lg backdrop-blur-md">
              {certificate.category}
            </span>
          </div>
        )}

        {/* Status */}
        {certificate.status && (
          <div className="absolute right-4 top-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-[#081b18]/90 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 shadow-lg backdrop-blur-md">
              <FaCheckCircle className="text-[10px]" />
              {certificate.status}
            </span>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Issuer */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-blue-300">
          <FaCertificate className="shrink-0 text-[11px]" />
          <span className="line-clamp-1">{certificate.issuer}</span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-blue-200 sm:text-xl">
          {certificate.title}
        </h3>

        {/* Description */}
        {certificate.description && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
            {certificate.description}
          </p>
        )}

        {/* Supporting information */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
          {certificate.date && (
            <span className="inline-flex items-center gap-2">
              <FaRegCalendarAlt className="text-blue-400" />
              {certificate.date}
            </span>
          )}

          {certificate.type && (
            <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-slate-400">
              {certificate.type}
            </span>
          )}
        </div>

        {/* Skills */}
        {certificate.skills?.length > 0 && (
          <div className="mt-5 border-t border-white/[0.07] pt-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Skills Covered
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {certificate.skills.slice(0, 4).map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="rounded-lg border border-blue-400/10 bg-blue-400/[0.06] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-400/[0.09]"
                >
                  {skill}
                </span>
              ))}

              {certificate.skills.length > 4 && (
                <span className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[11px] font-medium text-slate-500">
                  +{certificate.skills.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-white/[0.07] pt-5">
          {/* Credential ID */}
          <div className="min-w-0 flex-1">
            {certificate.credential?.id ? (
              <>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Credential ID
                </p>

                <p
                  title={certificate.credential.id}
                  className="mt-1 max-w-full truncate text-xs font-medium text-slate-300"
                >
                  {certificate.credential.id}
                </p>
              </>
            ) : (
              <p className="text-xs text-slate-500">Professional Certificate</p>
            )}
          </div>

          {/* Certificate link */}
          {certificate.certificateUrl && (
            <a
              href={certificate.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View certificate: ${certificate.title}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-3.5 py-2.5 text-xs font-semibold text-blue-200 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500 hover:text-white"
            >
              View Certificate
              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          )}
        </div>

        {/* Verification link */}
        {certificate.credential?.verificationUrl && (
          <a
            href={certificate.credential.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-medium text-slate-500 transition-colors duration-300 hover:text-blue-300"
          >
            <FaExternalLinkAlt className="text-[10px]" />
            Verify credential
          </a>
        )}
      </div>
    </article>
  );
};

export default CertificateCard;
