import { useState } from "react";

const tones = ["num-yellow", "num-blue", "num-pink"];

export default function Timeline({ items }) {
  const [activePhoto, setActivePhoto] = useState(null);
  const [failedPhotos, setFailedPhotos] = useState({});

  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <li key={item.title} className="timeline-item">
          <div
            className={`timeline-marker${activePhoto === index ? " is-open" : ""}`}
            onMouseEnter={() => {
              if (item.image) setActivePhoto(index);
            }}
            onMouseLeave={() => {
              if (item.image) {
                setActivePhoto((current) => (current === index ? null : current));
              }
            }}
          >
            {item.image ? (
              <>
                <button
                  type="button"
                  className={`num ${tones[index % tones.length]}`}
                  aria-label={`Show photo for ${item.title}`}
                  aria-expanded={activePhoto === index}
                  aria-controls={`achievement-photo-${index}`}
                  onClick={() =>
                    setActivePhoto((current) => (current === index ? null : index))
                  }
                  onFocus={() => setActivePhoto(index)}
                  onBlur={() => setActivePhoto(null)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setActivePhoto(null);
                  }}
                >
                  {index + 1}
                </button>
                <div
                  id={`achievement-photo-${index}`}
                  className="achievement-photo"
                  aria-hidden={activePhoto !== index}
                >
                  {activePhoto === index &&
                    (failedPhotos[item.image] ? (
                      <p className="achievement-photo-missing">
                        Add <code>{item.image.split("/").pop()}</code> to{" "}
                        <code>public/projects</code> to show this photo.
                      </p>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.imageAlt || `${item.title} photo`}
                        onError={() =>
                          setFailedPhotos((current) => ({
                            ...current,
                            [item.image]: true,
                          }))
                        }
                      />
                    ))}
                  <span className="achievement-photo-caption">{item.title}</span>
                </div>
              </>
            ) : (
              <span className={`num ${tones[index % tones.length]}`}>{index + 1}</span>
            )}
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
