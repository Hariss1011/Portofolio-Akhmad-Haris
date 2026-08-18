import Card from "../../common/Card";
import Badge from "../../common/Badge";

import {
  FaCertificate,
  FaExternalLinkAlt,
  FaRegCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const CertificateCard = ({ certificate }) => {
  return (
    <Card
      className="
        group
        relative
        overflow-hidden

        bg-white/[0.06]

        p-0

        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* =========================================
          TOP ACCENT
      ========================================== */}

      <div
        className="
          h-1.5
          w-full

          bg-linear-to-r
          from-blue-600
          via-cyan-500
          to-blue-400
        "
      />

      {/* =========================================
          CERTIFICATE PREVIEW
      ========================================== */}

      <div
        className="
          relative

          aspect-16/10

          overflow-hidden

          bg-white/5
        "
      >
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="
              h-full
              w-full

              object-cover

              transition-transform
              duration-700

              group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full

              flex-col
              items-center
              justify-center

              bg-linear-to-br
              from-slate-900
              to-blue-950

              text-white
            "
          >
            <FaCertificate
              className="
                text-5xl
                text-blue-400
              "
            />

            <span
              className="
                mt-3

                text-sm
                font-semibold

                text-slate-500
              "
            >
              Certificate
            </span>
          </div>
        )}

        {/* Overlay */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-linear-to-t
            from-slate-950/40
            via-transparent
            to-transparent

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        />

        {/* Category */}

        <div
          className="
            absolute
            left-4
            top-4
          "
        >
          <span
            className="
              inline-flex
              items-center

              rounded-full

              border
              border-white/30

              bg-white/5
              backdrop-blur

              px-3
              py-1.5

              text-xs
              font-bold

              text-slate-200

              shadow-sm
            "
          >
            {certificate.category}
          </span>
        </div>

        {/* Status */}

        <div
          className="
            absolute
            right-4
            top-4
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-1.5

              rounded-full

              bg-emerald-500

              px-3
              py-1.5

              text-xs
              font-bold

              text-white

              shadow-lg
            "
          >
            <FaCheckCircle />

            {certificate.status}
          </span>
        </div>
      </div>

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="p-6 sm:p-7">
        {/* Issuer */}

        <div
          className="
            flex
            items-center
            gap-2

            text-xs
            font-bold
            uppercase
            tracking-wider

            text-blue-300
          "
        >
          <FaCertificate />

          <span>{certificate.issuer}</span>
        </div>

        {/* Title */}

        <h3
          className="
            mt-3

            text-xl
            font-extrabold
            tracking-tight

            text-white

            transition-colors
            duration-300

            group-hover:text-blue-300
          "
        >
          {certificate.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3

            text-sm
            leading-6

            text-slate-400

            line-clamp-3
          "
        >
          {certificate.description}
        </p>

        {/* =======================================
            META
        ======================================== */}

        <div
          className="
            mt-5

            flex
            flex-wrap
            gap-3

            border-y
            border-white/10

            py-4
          "
        >
          {/* Date */}

          <div
            className="
              flex
              items-center
              gap-2

              text-sm

              text-slate-400
            "
          >
            <FaRegCalendarAlt className="text-blue-500" />

            <span>{certificate.date}</span>
          </div>

          {/* Type */}

          <div
            className="
              text-sm

              text-slate-500
            "
          >
            •
          </div>

          <div
            className="
              text-sm
              font-medium

              text-slate-400
            "
          >
            {certificate.type}
          </div>
        </div>

        {/* =======================================
            SKILLS
        ======================================== */}

        {certificate.skills?.length > 0 && (
          <div className="mt-5">
            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {certificate.skills.slice(0, 4).map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        )}

        {/* =======================================
            FOOTER
        ======================================== */}

        <div
          className="
            mt-6

            flex
            items-center
            justify-between
          "
        >
          {/* Credential */}

          <div>
            {certificate.credential?.id ? (
              <>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider

                    text-slate-500
                  "
                >
                  Credential ID
                </p>

                <p
                  className="
                    mt-1

                    max-w-32.5

                    truncate

                    text-xs
                    font-semibold

                    text-slate-300
                  "
                >
                  {certificate.credential.id}
                </p>
              </>
            ) : (
              <p
                className="
                  text-xs
                  text-slate-500
                "
              >
                Professional Certificate
              </p>
            )}
          </div>

          {/* View */}

          {certificate.certificateUrl && (
            <a
              href={certificate.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2

                rounded-xl

                bg-slate-900

                px-4
                py-2.5

                text-xs
                font-bold

                text-white

                transition-all
                duration-300

                hover:bg-blue-600
              "
            >
              View Certificate
              <FaArrowRight
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </a>
          )}
        </div>

        {/* Verification */}

        {certificate.credential?.verificationUrl && (
          <a
            href={certificate.credential.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4

              flex
              items-center
              justify-center
              gap-2

              border-t
              border-white/10

              pt-4

              text-xs
              font-semibold

              text-slate-500

              transition-colors
              duration-300

              hover:text-blue-300
            "
          >
            <FaExternalLinkAlt />
            Verify Credential
          </a>
        )}
      </div>
    </Card>
  );
};

export default CertificateCard;
