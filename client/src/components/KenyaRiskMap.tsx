import { LoaderCircle, MapPin } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { MapView } from "@/components/Map";
import { countyRisks, riskStyles } from "@/lib/riskData";

type KenyaRiskMapProps = {
  selectedCountyId: string;
  onCountySelect: (countyId: string) => void;
};

export default function KenyaRiskMap({
  selectedCountyId,
  onCountySelect,
}: KenyaRiskMapProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [mapUnavailable, setMapUnavailable] = useState(false);
  const onCountySelectRef = useRef(onCountySelect);

  useEffect(() => {
    onCountySelectRef.current = onCountySelect;
  }, [onCountySelect]);

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      setMapUnavailable(true);
      setIsMapLoading(false);
    }, 4500);
    return () => window.clearTimeout(fallbackTimer);
  }, []);

  const onMapReady = useCallback((readyMap: google.maps.Map) => {
    readyMap.setOptions({
      disableDefaultUI: true,
      zoomControl: true,
      gestureHandling: "cooperative",
      styles: [
        { elementType: "geometry", stylers: [{ color: "#ebe5d9" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#4b5250" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f6f1e8" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#a9c5c3" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#f8f5ed" }] },
        { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#c8bfad" }] },
      ],
    });
    setMap(readyMap);
    setIsMapLoading(false);
    setMapUnavailable(false);
  }, []);

  useEffect(() => {
    if (!map || !window.google) return;

    const circles = countyRisks.map(county => {
      const style = riskStyles[county.level];
      return new window.google.maps.Circle({
        map,
        center: { lat: county.lat, lng: county.lng },
        radius: county.level === "high" ? 82000 : county.level === "elevated" ? 61000 : 48000,
        fillColor: style.color,
        fillOpacity: 0.2,
        strokeColor: style.color,
        strokeOpacity: 0.75,
        strokeWeight: 1.3,
        clickable: true,
      });
    });

    const markers = countyRisks.map(county => {
      const style = riskStyles[county.level];
      const marker = new window.google.maps.Marker({
        map,
        position: { lat: county.lat, lng: county.lng },
        title: `${county.county}: ${style.label}`,
        label: {
          text: county.shortLabel,
          color: "#243132",
          fontSize: "10px",
          fontWeight: "700",
        },
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: style.color,
          fillOpacity: 1,
          strokeColor: "#fffdf9",
          strokeWeight: 2,
          scale: 10,
        },
      });
      marker.addListener("click", () => onCountySelectRef.current(county.id));
      return marker;
    });

    circles.forEach((circle, index) => {
      circle.addListener("click", () => onCountySelectRef.current(countyRisks[index].id));
    });

    return () => {
      circles.forEach(circle => circle.setMap(null));
      markers.forEach(marker => marker.setMap(null));
    };
  }, [map]);

  useEffect(() => {
    if (!map) return;
    const selected = countyRisks.find(county => county.id === selectedCountyId);
    if (!selected) return;
    map.panTo({ lat: selected.lat, lng: selected.lng });
    map.setZoom(selected.level === "high" ? 7 : 6.6);
  }, [map, selectedCountyId]);

  return (
    <div className="relative h-[410px] overflow-hidden rounded-[22px] border border-[#1c1e21]/10 bg-[#ece6da] shadow-[0_16px_45px_rgba(43,36,28,0.08)] md:h-[520px]">
      {!mapUnavailable ? (
        <MapView
          className="h-full"
          initialCenter={{ lat: -0.4, lng: 37.8 }}
          initialZoom={5.7}
          onMapReady={onMapReady}
        />
      ) : (
        <FallbackRiskMap selectedCountyId={selectedCountyId} onCountySelect={onCountySelect} />
      )}
      <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-xl border border-white/65 bg-[#fffdf9]/90 px-3 py-2.5 shadow-sm backdrop-blur">
        <span className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#3a4846]">
          <MapPin className="h-3.5 w-3.5 text-[#a56e33]" /> County signal layer
        </span>
      </div>
      {isMapLoading && !mapUnavailable ? (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-[#e7e0d4]/90 text-[#3d4a49]">
          <LoaderCircle className="h-6 w-6 animate-spin text-[#a56e33]" />
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.17em]">Loading county signals</span>
        </div>
      ) : null}
    </div>
  );
}

function FallbackRiskMap({
  selectedCountyId,
  onCountySelect,
}: KenyaRiskMapProps) {
  const coordinates = (county: (typeof countyRisks)[number]) => ({
    left: `${((county.lng - 33.7) / (42.4 - 33.7)) * 100}%`,
    top: `${((5.4 - county.lat) / (5.4 - -4.8)) * 100}%`,
  });

  return (
    <div className="fallback-map" role="img" aria-label="Interactive county-level election risk map of Kenya">
      <svg viewBox="0 0 500 560" className="fallback-map-outline" aria-hidden="true">
        <path d="M234 34 L319 61 L370 117 L356 178 L394 231 L372 301 L406 348 L370 432 L309 480 L224 507 L168 473 L105 416 L128 353 L81 295 L122 234 L110 159 L155 103 Z" />
        <path d="M153 107 L237 169 L364 119 M119 233 L243 274 L377 229 M101 298 L223 363 L389 347 M132 414 L306 479" />
      </svg>
      <div className="fallback-map-caption">Interactive county signals · basemap-free view</div>
      {countyRisks.map(county => {
        const style = riskStyles[county.level];
        const isSelected = county.id === selectedCountyId;
        return (
          <button
            type="button"
            key={county.id}
            onClick={() => onCountySelect(county.id)}
            className={`risk-node ${isSelected ? "is-selected" : ""}`}
            style={{ ...coordinates(county), "--risk-color": style.color } as React.CSSProperties}
            aria-label={`Select ${county.county}, ${style.label}`}
          >
            <span className="risk-node-dot" />
            <span className="risk-node-label">{county.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
