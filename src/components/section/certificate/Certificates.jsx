import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import certificates from "../../../data/certificates";
import CertificateCard from "./CertificateCard";

const FeaturedCertificate = ({ certificate, t }) => {
  const content = t(`certificates.items.${certificate.translationKey}`, {
    returnObjects: true,
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65 }}
      className="grid overflow-hidden rounded-2xl border border-[#E6E3DA] bg-white lg:grid-cols-[1fr_0.9fr]"
    >
      {/* Certificate Information */}
      <div className="flex flex-col p-7 sm:p-9 lg:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F3EDE7] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#A45F45]">
            <FaAward />
            {t("certificates.recognition")}
          </span>

          {certificate.statusKey && (
            <span className="rounded-full border border-[#DCE5D8] bg-[#F0F4ED] px-3 py-1.5 text-[10px] font-semibold text-[#617758]">
              {t(`certificates.status.${certificate.statusKey}`)}
            </span>
          )}
        </div>

        <div className="mt-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A45F45]">
            {content.category}
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#292D27] sm:text-3xl">
            {content.title}
          </h3>

          <p className="mt-3 text-sm font-semibold leading-6 text-[#788B70]">
            {content.issuer}
          </p>

          <p className="mt-5 text-sm leading-7 text-[#62665D]">
            {content.description}
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-4 border-y border-[#EAE7DF] py-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#92948B]">
              {t("certificates.issueYear")}
            </p>
            <p className="mt-1.5 text-sm font-semibold text-[#34382F]">
              {certificate.date}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#92948B]">
              {t("certificates.typeLabel")}
            </p>
            <p className="mt-1.5 text-sm font-semibold text-[#34382F]">
              {content.type}
            </p>
          </div>
        </div>

        {certificate.credential?.id && (
          <div className="mt-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#92948B]">
              {t("certificates.credentialId")}
            </p>
            <p className="mt-1.5 break-all font-mono text-xs font-medium text-[#555A50]">
              {certificate.credential.id}
            </p>
          </div>
        )}

        {content.skills?.length > 0 && (
          <div className="mt-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#92948B]">
              {t("certificates.competencies")}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {content.skills.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="rounded-md border border-[#E5E2D9] bg-[#F8F7F3] px-3 py-1.5 text-xs font-medium text-[#555A50]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-8">
          {certificate.certificateUrl && (
            <a
              href={certificate.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-lg bg-[#292D27] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#A45F45]"
            >
              {t("certificates.viewCertificate")}
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
        </div>
      </div>

      {/* Certificate Preview */}
      <div className="relative flex min-h-70 items-center justify-center overflow-hidden bg-[#EEECE5] p-6 sm:p-10 lg:min-h-full">
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#D8D4C9]" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-[#D8D4C9]" />

        {certificate.image ? (
          <div className="relative z-10 w-full max-w-122.5 overflow-hidden rounded-sm bg-white p-2 shadow-[0_15px_45px_rgba(36,39,34,0.14)] sm:p-3">
            <img
              src={certificate.image}
              alt={`${t("certificates.preview")}: ${content.title}`}
              loading="lazy"
              className="aspect-[4/3] h-auto w-full object-contain"
            />
          </div>
        ) : (
          <div className="relative z-10 flex h-48 w-full max-w-122.5 flex-col items-center justify-center rounded-sm border border-[#E6E3DA] bg-white shadow-lg">
            <FaCertificate className="text-4xl text-[#A45F45]" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#92948B]">
              {t("certificates.preview")}
            </p>
          </div>
        )}

        <span className="absolute bottom-5 right-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#92948B]">
          {t("certificates.recognition")}
        </span>
      </div>
    </motion.article>
  );
};

const Certificates = () => {
  const { t } = useTranslation();

  const featuredCertificate = certificates[0];
  const additionalCertificates = certificates.slice(1);

  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#F8F7F3] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full bg-[#B66E4E]/5.5 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#A45F45]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A45F45]">
              {t("certificates.eyebrow")}
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#242722] sm:text-4xl lg:text-[42px]">
            {t("certificates.title")}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#62665D] sm:text-base">
            {t("certificates.description")}
          </p>
        </motion.div>

        {/* Certificate Overview */}
        {certificates.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-between gap-5 border-y border-[#E5E2D9] py-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEE5DF] text-lg text-[#A45F45]">
                <FaCertificate />
              </div>

              <div>
                <p className="text-sm font-bold text-[#34382F]">
                  {t("certificates.development")}
                </p>
                <p className="mt-0.5 text-xs text-[#85877E]">
                  {t("certificates.verifiedRecords")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold tracking-tight text-[#292D27]">
                {String(certificates.length).padStart(2, "0")}
              </span>
              <span className="text-xs leading-5 text-[#85877E]">
                {t("certificates.totalLabel")}
              </span>
            </div>
          </motion.div>
        )}

        {/* Featured Certificate */}
        {featuredCertificate ? (
          <div className="mt-10">
            <FeaturedCertificate certificate={featuredCertificate} t={t} />
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-[#DCD8CE] bg-white px-6 py-14 text-center">
            <FaCertificate className="mx-auto text-3xl text-[#A45F45]" />
            <h3 className="mt-4 text-lg font-bold text-[#292D27]">
              {t("certificates.emptyTitle")}
            </h3>
            <p className="mt-2 text-sm text-[#85877E]">
              {t("certificates.emptyDescription")}
            </p>
          </div>
        )}

        {/* Additional Certificates */}
        {additionalCertificates.length > 0 && (
          <div className="mt-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap items-end justify-between gap-3"
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#A45F45]">
                  {t("certificates.moreCredentials")}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#292D27] sm:text-2xl">
                  {t("certificates.additionalTitle")}
                </h3>
              </div>

              <span className="text-xs font-medium text-[#92948B]">
                {String(additionalCertificates.length).padStart(2, "0")}{" "}
                {t("certificates.certificateCount")}
              </span>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {additionalCertificates.map((certificate, index) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
