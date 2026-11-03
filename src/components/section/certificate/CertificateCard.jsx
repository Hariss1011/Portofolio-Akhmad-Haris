import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CertificateCard = ({ certificate, index = 0 }) => {
  const { t } = useTranslation();

  const content = t(`certificates.items.${certificate.translationKey}`, {
    returnObjects: true,
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E6E3DA] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D5B6A5] hover:shadow-[0_14px_35px_rgba(36,39,34,0.07)]"
    >
      {/* Certificate Image */}
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#EEECE5] p-5 sm:p-6">
        {certificate.image ? (
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white p-2 shadow-[0_8px_25px_rgba(36,39,34,0.10)]">
            <img
              src={certificate.image}
              alt={`${t("certificates.preview")}: ${content.title}`}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"
            />
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center border border-[#E6E3DA] bg-white">
            <FaCertificate className="text-3xl text-[#A45F45]" />
            <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-[#92948B]">
              {t("certificates.preview")}
            </span>
          </div>
        )}

        {certificate.statusKey && (
          <span className="absolute right-4 top-4 rounded-full border border-[#DCE5D8] bg-[#F0F4ED] px-3 py-1.5 text-[10px] font-semibold text-[#617758]">
            {t(`certificates.status.${certificate.statusKey}`)}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#A45F45]">
          <FaCertificate className="shrink-0" />
          <span>{content.category}</span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug text-[#292D27] transition-colors duration-200 group-hover:text-[#A45F45]">
          {content.title}
        </h3>

        <p className="mt-2 text-xs font-semibold leading-5 text-[#788B70]">
          {content.issuer}
        </p>

        {content.description && (
          <p className="mt-4 text-sm leading-6 text-[#62665D]">
            {content.description}
          </p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#85877E]">
          {certificate.date && (
            <span className="inline-flex items-center gap-2">
              <FaCalendarAlt className="text-[#A45F45]" />
              {certificate.date}
            </span>
          )}

          {content.type && (
            <span className="rounded-md bg-[#F3F1EB] px-2.5 py-1.5 text-[11px] font-medium text-[#62665D]">
              {content.type}
            </span>
          )}
        </div>

        {content.skills?.length > 0 && (
          <div className="mt-5 border-t border-[#EAE7DF] pt-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#92948B]">
              {t("certificates.skillsCovered")}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {content.skills.map((skill, idx) => (
                <span
                  key={`${skill}-${idx}`}
                  className="rounded-md border border-[#E5E2D9] bg-[#F8F7F3] px-2.5 py-1.5 text-[11px] font-medium text-[#555A50]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto border-t border-[#EAE7DF] pt-5">
          {certificate.credential?.id && (
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#92948B]">
                {t("certificates.credentialId")}
              </p>
              <p className="mt-1 break-all font-mono text-xs text-[#555A50]">
                {certificate.credential.id}
              </p>
            </div>
          )}

          {certificate.certificateUrl && (
            <a
              href={certificate.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("certificates.viewCertificate")}: ${content.title}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#A45F45] transition-colors hover:text-[#788B70]"
            >
              {t("certificates.viewCertificate")}
              <FaExternalLinkAlt className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default CertificateCard;
