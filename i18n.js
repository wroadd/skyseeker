/* Holdnaptár i18n — hu / en / de
 * UI strings, glossary, moon names, and helpers.
 * Add languages by extending LANG_META + UI + GLOSSARY_I18N + MOON_I18N + EV texts.
 */
const LANG_META = {
  "hu": {
    "label": "Magyar",
    "locale": "hu-HU",
    "htmlLang": "hu"
  },
  "en": {
    "label": "English",
    "locale": "en-GB",
    "htmlLang": "en"
  },
  "de": {
    "label": "Deutsch",
    "locale": "de-DE",
    "htmlLang": "de"
  }
};
const COUNTRY_LANG = {"HU": "hu", "DE": "de", "AT": "de", "LI": "de", "GB": "en", "US": "en", "AU": "en", "NZ": "en", "IE": "en", "CA": "en"};
const UI = {
  "hu": {
    "title": "Holdnaptár — következő holdtölte és égi események",
    "brand_sub": "Holdfázisok, helyi égi adatok, sarki fény és ISS — helyi idő szerint",
    "loc_prefix": "Hely:",
    "loc_edit_aria": "Hely módosítása térképen",
    "loc_note_saved": "mentett hely (térkép)",
    "loc_note_geo": "böngésző geolokációja",
    "loc_note_denied": "helymeghatározás megtagadva — Budapest alapértelmezés",
    "loc_note_error": "helymeghatározás sikertelen — Budapest alapértelmezés",
    "loc_note_default": "Budapest alapértelmezés",
    "lbl_next_fm": "Következő holdtölte",
    "lbl_moon_now": "A Hold most",
    "lbl_sun": "Nap ma",
    "lbl_moon_local": "Hold helyben",
    "lbl_aurora": "Sarki fény / űridőjárás",
    "lbl_planets": "Bolygók ma este",
    "lbl_night": "Éjszakai megfigyelés",
    "lbl_iss": "ISS látható áthaladások",
    "lbl_fm12": "Következő 12 holdtölte",
    "lbl_events": "Csillagászati érdekességek",
    "src_astronomy": "Astronomy Engine",
    "src_astronomy_meteo": "Astronomy Engine · Open-Meteo",
    "src_noaa": "NOAA SWPC",
    "src_celestrak": "Celestrak · satellite.js",
    "ev_window_hint": "2 hónapos ablak · max. 12 hónap",
    "ev_prev": "‹ Előző",
    "ev_next": "Következő ›",
    "ev_empty": "Nincs esemény ebben az időszakban",
    "ev_cat_m": "meteorraj",
    "ev_cat_e": "fogyatkozás",
    "ev_cat_p": "bolygó",
    "ev_cat_s": "napforduló / napéjegyenlőség",
    "ev_cat_l": "Hold",
    "cd_day": "nap",
    "cd_hour": "óra",
    "cd_min": "perc",
    "cd_sec": "mp",
    "age_prefix": "kor:",
    "age_suffix": "nap",
    "next_new": "következő újhold:",
    "illum": "megvilágítottság",
    "budapest_tz_note": "budapesti idő",
    "loc_modal_title": "Hely kiválasztása",
    "loc_search_ph": "Település keresése…",
    "loc_search": "Keresés",
    "loc_coords": "Koordináták:",
    "loc_name": "Név:",
    "loc_geo": "Saját helyem",
    "loc_auto": "Vissza az automatikus helyhez",
    "loc_cancel": "Mégse",
    "loc_save": "Mentés",
    "loc_close": "Bezárás",
    "loc_map_aria": "Térkép a hely kiválasztásához",
    "lang_label": "Nyelv",
    "lang_offer": "Váltás {lang} nyelvre?",
    "lang_offer_yes": "Igen",
    "lang_offer_no": "Most nem",
    "wiki_en_mark": "(angol)",
    "footer_intro": "Holdfázisok (lista): Jean Meeus, Astronomical Algorithms (49. fejezet), böngészőben számolva (pontosság ~1 perc).",
    "loading": "betöltés…",
    "phase_new": "Újhold",
    "phase_wax_cres": "Növekvő sarló",
    "phase_first": "Első negyed",
    "phase_wax_gib": "Növekvő hold",
    "phase_full": "Telihold",
    "phase_wan_gib": "Fogyó hold",
    "phase_last": "Utolsó negyed",
    "phase_wan_cres": "Fogyó sarló",
    "sun_rise": "Napkelte",
    "sun_set": "Napnyugta",
    "day_len": "Nappalhossz",
    "civil_tw": "Polgári szürkület",
    "astro_tw_end": "Csill. szürkület vége",
    "golden": "Aranyóra (este)",
    "moon_rise": "Holdkelte",
    "moon_set": "Holdnyugta",
    "altitude": "Magasság",
    "azimuth": "Azimut",
    "distance": "Távolság",
    "illumination": "Megvilágítottság",
    "libration": "Libráció",
    "brightness": "Fényesség",
    "below_horizon": "(horizont alatt)",
    "hour_unit": "óra",
    "min_unit": "perc",
    "planet_vis": "látható",
    "planet_faint": "halvány",
    "planet_below": "horizont alatt",
    "kp_now": "Kp index (aktuális)",
    "ovation_pct": "OVATION valószínűség",
    "need_kp": "Szükséges Kp itt",
    "geomag_lat": "Geomágneses szélesség",
    "solar_wind": "Napszél sebesség",
    "imf_bz": "IMF Bz (GSM)",
    "kp_forecast": "Kp előrejelzés (max ~2 nap)",
    "g_scale": "NOAA G-skála",
    "night_astro": "Csill. éjszaka",
    "darkest": "Legsötétebb ablak",
    "moon_ill_night": "Hold megvilágítottság",
    "clouds": "Felhőzet ma este",
    "clouds_avg": "Felhőzet (éjjel avg)",
    "clouds_na": "nem elérhető",
    "iss_col_date": "Dátum",
    "iss_col_start": "Kezdet",
    "iss_col_max": "Max",
    "iss_col_end": "Vége",
    "iss_col_mag": "Max mag",
    "default_city": "Budapest",
    "months": [
      "január",
      "február",
      "március",
      "április",
      "május",
      "június",
      "július",
      "augusztus",
      "szeptember",
      "október",
      "november",
      "december"
    ],
    "err_astro_missing": "Az Astronomy Engine nem töltődött be.",
    "err_sun": "Napadatok számolása sikertelen.",
    "err_moon": "Holdadatok számolása sikertelen.",
    "err_planets": "Bolygóadatok számolása sikertelen.",
    "err_night": "Éjszakai ablak számolása sikertelen.",
    "err_night_undef": "Csillagászati éjszaka nem határozható meg (nyári magas napállás?).",
    "err_clouds": "Felhőzet-előrejelzés betöltése sikertelen.",
    "err_aurora": "Űridőjárás-adatok betöltése sikertelen (hálózat vagy NOAA szolgáltatás). Próbáld később.",
    "err_iss": "ISS-adatok betöltése sikertelen.",
    "err_iss_retry": "Próbáld meg később — a TLE-forrás átmenetileg nem elérhető.",
    "err_leaflet": "Leaflet betöltése sikertelen",
    "err_noaa": "NOAA válasz hiba",
    "sun_note": "Számolás a megadott földrajzi helyre, helyi (Budapest-zóna) megjelenítéssel.",
    "blue_hour_eve": "Kék óra este: {start}–{end}.",
    "moon_rise_note": "A holdkelte/-nyugta a korong felső peremének horizontérintése (töréssel).",
    "planets_note": "Állás polgári szürkület után ~30 perccel ({time}). Szabad szemes határ kb. 6 magnitúdó (ideális égen).",
    "planet_mercury": "Merkúr",
    "planet_venus": "Vénusz",
    "planet_mars": "Mars",
    "planet_jupiter": "Jupiter",
    "planet_saturn": "Szaturnusz",
    "dark_hrs": "Kb. {hrs} óra csillagászati éjszaka Hold nélkül.",
    "dark_none": "nincs hosszú holdmentes ablak",
    "dark_moonlit": "A Hold egész (vagy majdnem egész) csillagászati éjszaka a horizont felett van, vagy nincs teljes csill. éjszaka.",
    "clouds_src": "Felhőzet: Open-Meteo órás előrejelzés.",
    "clouds_updated": "Open-Meteo frissítve: {time}.",
    "near_max": "(környék max {n} %)",
    "need_kp_rare": "Kp 9+ (nagyon ritka)",
    "bz_south": "délies",
    "bz_north": "északias",
    "g_now": "most: G{g}",
    "g_later": "holnapután: G{g}",
    "aurora_note_base": "Forrás: NOAA SWPC. Kp időbélyeg: {kp} UTC. OVATION előrejelzés: {ov}.",
    "aurora_chance": "A te helyeden (~{lat}° geomágneses szélesség) a sarki fény tipikusan Kp {need}+ mellett várható.",
    "aurora_rare": "A te helyeden a sarki fény még extrém (Kp 9) viharban is csak ritkán, nagyon alacsonyan várható.",
    "aurora_ovation_caveat": "Az OVATION modell az északi/déli oválra optimalizált; közép-európai {pct} % érték önmagában nem jelent biztos észlelést.",
    "iss_none": "A következő 10 napban nincs ≥10° max. magasságú, látható ISS-áthaladás erről a helyről.",
    "iss_loading": "TLE lekérése és áthaladások számolása…",
    "iss_note": "Látható áthaladás: megfigyelő sötétben (Nap &lt; −6°), az ISS Nap által megvilágítva, max. magasság ≥ 10°. Forrás: {src} TLE ({name}), pályaszámítás SGP4 (satellite.js). TLE korszak: {epoch}. Az idők ±1 perc pontosságúak lehetnek a TLE korától függően.",
    "iss_alt": "Magasság:",
    "iss_spd": "Sebesség:",
    "loc_saving": "Mentés…",
    "loc_getting": "Hely lekérése…",
    "loc_denied": "A böngésző nem adta meg a helyet.",
    "loc_geo_fail": "Helymeghatározás sikertelen.",
    "loc_geo_ok": "Saját hely beállítva — mentsd el a Mentés gombbal.",
    "loc_searching": "Keresés…",
    "loc_search_cors": "Keresés nem elérhető.",
    "loc_search_empty": "Nincs találat.",
    "loc_search_hit": "Találat: {name}",
    "loc_search_err": "Keresési hiba.",
    "ev_pager_aria": "Események lapozása",
    "ev_prev_aria": "Előző időszak",
    "ev_next_aria": "Következő időszak",
    "gbub_aria": "Fogalom magyarázata",
    "fmt_hm": "{h} óra {m} perc",
    "below_paren": "(horizont alatt)",
    "iss_now": "Most:",
    "iss_overhead": "Feletted:",
    "iss_below_now": "Jelenleg a horizont alatt",
    "err_satjs": "satellite.js hiányzik",
    "err_ae": "Astronomy Engine hiányzik",
    "age_line": "kor: {age} nap · következő újhold: {date}"
  },
  "en": {
    "title": "Moon Calendar — next full moon and sky events",
    "brand_sub": "Moon phases, local sky data, aurora and ISS — in local time",
    "loc_prefix": "Location:",
    "loc_edit_aria": "Change location on the map",
    "loc_note_saved": "saved location (map)",
    "loc_note_geo": "browser geolocation",
    "loc_note_denied": "location denied — Budapest default",
    "loc_note_error": "location failed — Budapest default",
    "loc_note_default": "Budapest default",
    "lbl_next_fm": "Next full moon",
    "lbl_moon_now": "Moon now",
    "lbl_sun": "Sun today",
    "lbl_moon_local": "Moon locally",
    "lbl_aurora": "Aurora / space weather",
    "lbl_planets": "Planets tonight",
    "lbl_night": "Night observing",
    "lbl_iss": "ISS visible passes",
    "lbl_fm12": "Next 12 full moons",
    "lbl_events": "Astronomical highlights",
    "src_astronomy": "Astronomy Engine",
    "src_astronomy_meteo": "Astronomy Engine · Open-Meteo",
    "src_noaa": "NOAA SWPC",
    "src_celestrak": "Celestrak · satellite.js",
    "ev_window_hint": "2-month window · up to 12 months",
    "ev_prev": "‹ Previous",
    "ev_next": "Next ›",
    "ev_empty": "No events in this period",
    "ev_cat_m": "meteor shower",
    "ev_cat_e": "eclipse",
    "ev_cat_p": "planet",
    "ev_cat_s": "solstice / equinox",
    "ev_cat_l": "Moon",
    "cd_day": "days",
    "cd_hour": "hrs",
    "cd_min": "min",
    "cd_sec": "sec",
    "age_prefix": "age:",
    "age_suffix": "days",
    "next_new": "next new moon:",
    "illum": "illumination",
    "budapest_tz_note": "Budapest time",
    "loc_modal_title": "Choose location",
    "loc_search_ph": "Search for a place…",
    "loc_search": "Search",
    "loc_coords": "Coordinates:",
    "loc_name": "Name:",
    "loc_geo": "My location",
    "loc_auto": "Back to automatic location",
    "loc_cancel": "Cancel",
    "loc_save": "Save",
    "loc_close": "Close",
    "loc_map_aria": "Map to pick a location",
    "lang_label": "Language",
    "lang_offer": "Switch to {lang}?",
    "lang_offer_yes": "Yes",
    "lang_offer_no": "Not now",
    "wiki_en_mark": "(English)",
    "footer_intro": "Moon phases (list): Jean Meeus, Astronomical Algorithms (ch. 49), computed in-browser (~1 min accuracy).",
    "loading": "loading…",
    "phase_new": "New Moon",
    "phase_wax_cres": "Waxing crescent",
    "phase_first": "First quarter",
    "phase_wax_gib": "Waxing gibbous",
    "phase_full": "Full Moon",
    "phase_wan_gib": "Waning gibbous",
    "phase_last": "Last quarter",
    "phase_wan_cres": "Waning crescent",
    "sun_rise": "Sunrise",
    "sun_set": "Sunset",
    "day_len": "Day length",
    "civil_tw": "Civil twilight",
    "astro_tw_end": "Astro twilight ends",
    "golden": "Golden hour (eve)",
    "moon_rise": "Moonrise",
    "moon_set": "Moonset",
    "altitude": "Altitude",
    "azimuth": "Azimuth",
    "distance": "Distance",
    "illumination": "Illumination",
    "libration": "Libration",
    "brightness": "Brightness",
    "below_horizon": "(below horizon)",
    "hour_unit": "h",
    "min_unit": "min",
    "planet_vis": "visible",
    "planet_faint": "faint",
    "planet_below": "below horizon",
    "kp_now": "Kp index (current)",
    "ovation_pct": "OVATION probability",
    "need_kp": "Kp needed here",
    "geomag_lat": "Geomagnetic latitude",
    "solar_wind": "Solar wind speed",
    "imf_bz": "IMF Bz (GSM)",
    "kp_forecast": "Kp forecast (max ~2 days)",
    "g_scale": "NOAA G-scale",
    "night_astro": "Astro night",
    "darkest": "Darkest window",
    "moon_ill_night": "Moon illumination",
    "clouds": "Cloud cover tonight",
    "clouds_avg": "Clouds (night avg)",
    "clouds_na": "unavailable",
    "iss_col_date": "Date",
    "iss_col_start": "Start",
    "iss_col_max": "Max",
    "iss_col_end": "End",
    "iss_col_mag": "Max mag",
    "default_city": "Budapest",
    "months": [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "err_astro_missing": "Astronomy Engine failed to load.",
    "err_sun": "Could not compute Sun data.",
    "err_moon": "Could not compute Moon data.",
    "err_planets": "Could not compute planet data.",
    "err_night": "Could not compute the night window.",
    "err_night_undef": "Astronomical night cannot be determined (high summer Sun?).",
    "err_clouds": "Cloud forecast failed to load.",
    "err_aurora": "Space-weather data failed to load (network or NOAA). Try again later.",
    "err_iss": "ISS data failed to load.",
    "err_iss_retry": "Try again later — the TLE source may be temporarily unavailable.",
    "err_leaflet": "Failed to load Leaflet",
    "err_noaa": "NOAA response error",
    "sun_note": "Computed for the selected location; times shown in the Budapest time zone.",
    "blue_hour_eve": "Evening blue hour: {start}–{end}.",
    "moon_rise_note": "Moonrise/set is when the upper limb touches the horizon (with refraction).",
    "planets_note": "Positions ~30 minutes after civil dusk ({time}). Naked-eye limit about magnitude 6 (ideal sky).",
    "planet_mercury": "Mercury",
    "planet_venus": "Venus",
    "planet_mars": "Mars",
    "planet_jupiter": "Jupiter",
    "planet_saturn": "Saturn",
    "dark_hrs": "About {hrs} hours of moonless astronomical night.",
    "dark_none": "no long moonless window",
    "dark_moonlit": "The Moon is above the horizon for all (or nearly all) of astronomical night, or there is no full astronomical night.",
    "clouds_src": "Clouds: Open-Meteo hourly forecast.",
    "clouds_updated": "Open-Meteo updated: {time}.",
    "near_max": "(area max {n} %)",
    "need_kp_rare": "Kp 9+ (very rare)",
    "bz_south": "southward",
    "bz_north": "northward",
    "g_now": "now: G{g}",
    "g_later": "day after tomorrow: G{g}",
    "aurora_note_base": "Source: NOAA SWPC. Kp timestamp: {kp} UTC. OVATION forecast: {ov}.",
    "aurora_chance": "At your site (~{lat}° geomagnetic latitude) aurora is typically expected around Kp {need}+.",
    "aurora_rare": "At your site aurora is rare even in extreme (Kp 9) storms, and then only very low on the horizon.",
    "aurora_ovation_caveat": "OVATION is tuned for the polar ovals; a Central European {pct} % value alone does not guarantee a sighting.",
    "iss_none": "No visible ISS pass ≥10° max altitude from this site in the next 10 days.",
    "iss_loading": "Fetching TLE and computing passes…",
    "iss_note": "Visible pass: observer in darkness (Sun &lt; −6°), ISS sunlit, max altitude ≥ 10°. Source: {src} TLE ({name}), SGP4 (satellite.js). TLE epoch: {epoch}. Times may be ±1 minute depending on TLE age.",
    "iss_alt": "Altitude:",
    "iss_spd": "Speed:",
    "loc_saving": "Saving…",
    "loc_getting": "Getting location…",
    "loc_denied": "The browser did not share your location.",
    "loc_geo_fail": "Geolocation failed.",
    "loc_geo_ok": "Own location set — save it with Save.",
    "loc_searching": "Searching…",
    "loc_search_cors": "Search unavailable.",
    "loc_search_empty": "No results.",
    "loc_search_hit": "Found: {name}",
    "loc_search_err": "Search error.",
    "ev_pager_aria": "Event pager",
    "ev_prev_aria": "Previous period",
    "ev_next_aria": "Next period",
    "gbub_aria": "Glossary explanation",
    "fmt_hm": "{h} h {m} min",
    "below_paren": "(below horizon)",
    "iss_now": "Now:",
    "iss_overhead": "Overhead:",
    "iss_below_now": "Currently below the horizon",
    "err_satjs": "satellite.js missing",
    "err_ae": "Astronomy Engine missing",
    "age_line": "age: {age} days · next new moon: {date}"
  },
  "de": {
    "title": "Mondkalender — nächster Vollmond und Himmelsereignisse",
    "brand_sub": "Mondphasen, lokale Himmelsdaten, Polarlicht und ISS — Ortszeit",
    "loc_prefix": "Ort:",
    "loc_edit_aria": "Ort auf der Karte ändern",
    "loc_note_saved": "gespeicherter Ort (Karte)",
    "loc_note_geo": "Browser-Geolokalisierung",
    "loc_note_denied": "Standort verweigert — Standard Budapest",
    "loc_note_error": "Standort fehlgeschlagen — Standard Budapest",
    "loc_note_default": "Standard Budapest",
    "lbl_next_fm": "Nächster Vollmond",
    "lbl_moon_now": "Mond jetzt",
    "lbl_sun": "Sonne heute",
    "lbl_moon_local": "Mond vor Ort",
    "lbl_aurora": "Polarlicht / Weltraumwetter",
    "lbl_planets": "Planeten heute Abend",
    "lbl_night": "Nachtbeobachtung",
    "lbl_iss": "Sichtbare ISS-Überflüge",
    "lbl_fm12": "Nächste 12 Vollmonde",
    "lbl_events": "Astronomische Highlights",
    "src_astronomy": "Astronomy Engine",
    "src_astronomy_meteo": "Astronomy Engine · Open-Meteo",
    "src_noaa": "NOAA SWPC",
    "src_celestrak": "Celestrak · satellite.js",
    "ev_window_hint": "2-Monats-Fenster · max. 12 Monate",
    "ev_prev": "‹ Zurück",
    "ev_next": "Weiter ›",
    "ev_empty": "Keine Ereignisse in diesem Zeitraum",
    "ev_cat_m": "Meteorstrom",
    "ev_cat_e": "Finsternis",
    "ev_cat_p": "Planet",
    "ev_cat_s": "Sonnenwende / Tagundnachtgleiche",
    "ev_cat_l": "Mond",
    "cd_day": "Tage",
    "cd_hour": "Std",
    "cd_min": "Min",
    "cd_sec": "Sek",
    "age_prefix": "Alter:",
    "age_suffix": "Tage",
    "next_new": "nächster Neumond:",
    "illum": "Beleuchtung",
    "budapest_tz_note": "Budapester Zeit",
    "loc_modal_title": "Ort wählen",
    "loc_search_ph": "Ort suchen…",
    "loc_search": "Suchen",
    "loc_coords": "Koordinaten:",
    "loc_name": "Name:",
    "loc_geo": "Mein Standort",
    "loc_auto": "Zurück zum automatischen Ort",
    "loc_cancel": "Abbrechen",
    "loc_save": "Speichern",
    "loc_close": "Schließen",
    "loc_map_aria": "Karte zur Ortswahl",
    "lang_label": "Sprache",
    "lang_offer": "Auf {lang} umschalten?",
    "lang_offer_yes": "Ja",
    "lang_offer_no": "Nicht jetzt",
    "wiki_en_mark": "(Englisch)",
    "footer_intro": "Mondphasen (Liste): Jean Meeus, Astronomical Algorithms (Kap. 49), im Browser berechnet (~1 Min. Genauigkeit).",
    "loading": "laden…",
    "phase_new": "Neumond",
    "phase_wax_cres": "Zunehmende Sichel",
    "phase_first": "Erstes Viertel",
    "phase_wax_gib": "Zunehmender Mond",
    "phase_full": "Vollmond",
    "phase_wan_gib": "Abnehmender Mond",
    "phase_last": "Letztes Viertel",
    "phase_wan_cres": "Abnehmende Sichel",
    "sun_rise": "Sonnenaufgang",
    "sun_set": "Sonnenuntergang",
    "day_len": "Tageslänge",
    "civil_tw": "Bürgerliche Dämmerung",
    "astro_tw_end": "Ende astr. Dämmerung",
    "golden": "Goldene Stunde (Abend)",
    "moon_rise": "Mondaufgang",
    "moon_set": "Monduntergang",
    "altitude": "Höhe",
    "azimuth": "Azimut",
    "distance": "Entfernung",
    "illumination": "Beleuchtung",
    "libration": "Libration",
    "brightness": "Helligkeit",
    "below_horizon": "(unter dem Horizont)",
    "hour_unit": "Std",
    "min_unit": "Min",
    "planet_vis": "sichtbar",
    "planet_faint": "schwach",
    "planet_below": "unter dem Horizont",
    "kp_now": "Kp-Index (aktuell)",
    "ovation_pct": "OVATION-Wahrscheinlichkeit",
    "need_kp": "Benötigtes Kp hier",
    "geomag_lat": "Geomagnetische Breite",
    "solar_wind": "Sonnenwindgeschwindigkeit",
    "imf_bz": "IMF Bz (GSM)",
    "kp_forecast": "Kp-Vorhersage (max. ~2 Tage)",
    "g_scale": "NOAA G-Skala",
    "night_astro": "Astr. Nacht",
    "darkest": "Dunkelstes Fenster",
    "moon_ill_night": "Mondbeleuchtung",
    "clouds": "Bewölkung heute Abend",
    "clouds_avg": "Bewölkung (Nacht-Mittel)",
    "clouds_na": "nicht verfügbar",
    "iss_col_date": "Datum",
    "iss_col_start": "Beginn",
    "iss_col_max": "Max",
    "iss_col_end": "Ende",
    "iss_col_mag": "Max Mag",
    "default_city": "Budapest",
    "months": [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember"
    ],
    "err_astro_missing": "Astronomy Engine konnte nicht geladen werden.",
    "err_sun": "Sonnendaten konnten nicht berechnet werden.",
    "err_moon": "Monddaten konnten nicht berechnet werden.",
    "err_planets": "Planetendaten konnten nicht berechnet werden.",
    "err_night": "Nachtfenster konnte nicht berechnet werden.",
    "err_night_undef": "Astronomische Nacht nicht bestimmbar (hohe Sommersonne?).",
    "err_clouds": "Wolkenvorhersage konnte nicht geladen werden.",
    "err_aurora": "Weltraumwetter-Daten fehlgeschlagen (Netz oder NOAA). Später erneut versuchen.",
    "err_iss": "ISS-Daten fehlgeschlagen.",
    "err_iss_retry": "Später erneut versuchen — TLE-Quelle vorübergehend nicht erreichbar.",
    "err_leaflet": "Leaflet konnte nicht geladen werden",
    "err_noaa": "NOAA-Antwortfehler",
    "sun_note": "Berechnet für den gewählten Ort; Anzeige in Budapester Zeitzone.",
    "blue_hour_eve": "Blaue Stunde abends: {start}–{end}.",
    "moon_rise_note": "Mondauf-/untergang: Oberrand berührt den Horizont (mit Refraktion).",
    "planets_note": "Stellung ~30 Min. nach bürgerlicher Dämmerung ({time}). Freie-Auge-Grenze ca. Magnitude 6 (idealer Himmel).",
    "planet_mercury": "Merkur",
    "planet_venus": "Venus",
    "planet_mars": "Mars",
    "planet_jupiter": "Jupiter",
    "planet_saturn": "Saturn",
    "dark_hrs": "Etwa {hrs} Stunden mondlose astronomische Nacht.",
    "dark_none": "kein langes mondloses Fenster",
    "dark_moonlit": "Der Mond steht die ganze (oder fast ganze) astronomische Nacht über dem Horizont, oder es gibt keine volle astr. Nacht.",
    "clouds_src": "Bewölkung: Open-Meteo Stundenprognose.",
    "clouds_updated": "Open-Meteo aktualisiert: {time}.",
    "near_max": "(Umfeld max {n} %)",
    "need_kp_rare": "Kp 9+ (sehr selten)",
    "bz_south": "südlich",
    "bz_north": "nördlich",
    "g_now": "jetzt: G{g}",
    "g_later": "übermorgen: G{g}",
    "aurora_note_base": "Quelle: NOAA SWPC. Kp-Zeitstempel: {kp} UTC. OVATION-Prognose: {ov}.",
    "aurora_chance": "An deinem Ort (~{lat}° geomagnetische Breite) ist Polarlicht typisch ab Kp {need}+ zu erwarten.",
    "aurora_rare": "An deinem Ort ist Polarlicht selbst bei extremen (Kp 9) Stürmen selten und dann nur sehr tief.",
    "aurora_ovation_caveat": "OVATION ist auf die Polarovale ausgelegt; ein mitteleuropäischer Wert von {pct} % allein garantiert keine Sichtung.",
    "iss_none": "In den nächsten 10 Tagen kein sichtbarer ISS-Überflug ≥10° Maxhöhe von diesem Ort.",
    "iss_loading": "TLE wird geladen und Überflüge berechnet…",
    "iss_note": "Sichtbarer Überflug: Beobachter im Dunkeln (Sonne &lt; −6°), ISS beleuchtet, Maxhöhe ≥ 10°. Quelle: {src} TLE ({name}), SGP4 (satellite.js). TLE-Epoche: {epoch}. Zeiten können ±1 Min. abweichen.",
    "iss_alt": "Höhe:",
    "iss_spd": "Geschwindigkeit:",
    "loc_saving": "Speichern…",
    "loc_getting": "Standort wird ermittelt…",
    "loc_denied": "Der Browser hat den Standort nicht freigegeben.",
    "loc_geo_fail": "Standortbestimmung fehlgeschlagen.",
    "loc_geo_ok": "Eigener Standort gesetzt — mit Speichern sichern.",
    "loc_searching": "Suche…",
    "loc_search_cors": "Suche nicht verfügbar.",
    "loc_search_empty": "Keine Treffer.",
    "loc_search_hit": "Treffer: {name}",
    "loc_search_err": "Suchfehler.",
    "ev_pager_aria": "Ereignis-Pager",
    "ev_prev_aria": "Vorheriger Zeitraum",
    "ev_next_aria": "Nächster Zeitraum",
    "gbub_aria": "Begriffserklärung",
    "fmt_hm": "{h} Std. {m} Min.",
    "below_paren": "(unter dem Horizont)",
    "iss_now": "Jetzt:",
    "iss_overhead": "Über dir:",
    "iss_below_now": "Derzeit unter dem Horizont",
    "err_satjs": "satellite.js fehlt",
    "err_ae": "Astronomy Engine fehlt",
    "age_line": "Alter: {age} Tage · nächster Neumond: {date}"
  }
};
const MOON_I18N = {
  "farkashold": {
    "name": {
      "hu": "Farkashold",
      "en": "Wolf Moon",
      "de": "Wolfsmond"
    },
    "title": {
      "hu": "Farkashold",
      "en": "Wolf Moon",
      "de": "Wolfsmond"
    },
    "text": {
      "hu": "Januári telihold. Az elnevezés észak-amerikai folklórból / az Old Farmer’s Almanac hagyományából származik: a farkasok hangos januári üvöltéséhez kötötték. Nem magyar néphagyomány.",
      "en": "January full moon. The name comes from North American folklore / the Old Farmer’s Almanac tradition, linked to wolves howling in midwinter. Not a Hungarian folk name.",
      "de": "Januar-Vollmond. Der Name stammt aus nordamerikanischer Folklore / dem Old Farmer’s Almanac und bezieht sich auf heulende Wölfe im Hochwinter. Kein ungarischer Volksname."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "hohold": {
    "name": {
      "hu": "Hóhold",
      "en": "Snow Moon",
      "de": "Schneemond"
    },
    "title": {
      "hu": "Hóhold",
      "en": "Snow Moon",
      "de": "Schneemond"
    },
    "text": {
      "hu": "Februári telihold. Az erős havazásról kapta a nevét az észak-amerikai hagyományban (Snow Moon, Old Farmer’s Almanac).",
      "en": "February full moon, named for heavy snowfall in the North American / Old Farmer’s Almanac tradition.",
      "de": "Februar-Vollmond; nach starkem Schneefall in der nordamerikanischen / Old-Farmer’s-Almanac-Tradition (Snow Moon)."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "fereghold": {
    "name": {
      "hu": "Féreghold",
      "en": "Worm Moon",
      "de": "Wurm-Mond"
    },
    "title": {
      "hu": "Féreghold",
      "en": "Worm Moon",
      "de": "Wurm-Mond"
    },
    "text": {
      "hu": "Márciusi telihold (Worm Moon). A talajolvadáskor megjelenő földigiliszta-aktivitáshoz kötötték; észak-amerikai / Farmer’s Almanac hagyomány.",
      "en": "March full moon (Worm Moon), tied to earthworm activity as the ground thaws — North American / Farmer’s Almanac tradition.",
      "de": "März-Vollmond (Worm Moon); mit Regenwurm-Aktivität beim Bodentauen verbunden — nordamerikanische Tradition."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "rozsaszin": {
    "name": {
      "hu": "Rózsaszín Hold",
      "en": "Pink Moon",
      "de": "Rosa Mond"
    },
    "title": {
      "hu": "Rózsaszín Hold",
      "en": "Pink Moon",
      "de": "Rosa Mond"
    },
    "text": {
      "hu": "Áprilisi telihold (Pink Moon). Nem a Hold színe: a korai vad flox (pink moss phlox) virágzásáról nevezték el az észak-amerikai hagyományban.",
      "en": "April full moon (Pink Moon). Not the Moon’s color — named for early wild ground phlox in North American tradition.",
      "de": "April-Vollmond (Pink Moon). Nicht die Mondfarbe — nach früh blühendem Phlox in nordamerikanischer Tradition."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "viraghold": {
    "name": {
      "hu": "Virághold",
      "en": "Flower Moon",
      "de": "Blumenmond"
    },
    "title": {
      "hu": "Virághold",
      "en": "Flower Moon",
      "de": "Blumenmond"
    },
    "text": {
      "hu": "Májusi telihold (Flower Moon): a tavaszi virágözönről az észak-amerikai holdnév-hagyomány szerint.",
      "en": "May full moon (Flower Moon): spring blossoms in the North American naming tradition.",
      "de": "Mai-Vollmond (Flower Moon): Frühlingsblüte in der nordamerikanischen Namensgebung."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "eperhold": {
    "name": {
      "hu": "Eperhold",
      "en": "Strawberry Moon",
      "de": "Erdbeermond"
    },
    "title": {
      "hu": "Eperhold",
      "en": "Strawberry Moon",
      "de": "Erdbeermond"
    },
    "text": {
      "hu": "Júniusi telihold (Strawberry Moon): az erdei szamóca érésének idejéhez kötött észak-amerikai elnevezés.",
      "en": "June full moon (Strawberry Moon): ripening of wild strawberries in North American tradition.",
      "de": "Juni-Vollmond (Strawberry Moon): Reife der Walderdbeeren in nordamerikanischer Tradition."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "bakhold": {
    "name": {
      "hu": "Bakhold",
      "en": "Buck Moon",
      "de": "Bockmond"
    },
    "title": {
      "hu": "Bakhold",
      "en": "Buck Moon",
      "de": "Bockmond"
    },
    "text": {
      "hu": "Júliusi telihold (Buck Moon): a hím szarvasok új agancsnövekedéséhez kapcsolt észak-amerikai név.",
      "en": "July full moon (Buck Moon): new antler growth on male deer in North American tradition.",
      "de": "Juli-Vollmond (Buck Moon): neues Geweihwachstum männlicher Hirsche."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "tokhalhold": {
    "name": {
      "hu": "Tokhalhold",
      "en": "Sturgeon Moon",
      "de": "Störmond"
    },
    "title": {
      "hu": "Tokhalhold",
      "en": "Sturgeon Moon",
      "de": "Störmond"
    },
    "text": {
      "hu": "Augusztusi telihold (Sturgeon Moon): a Nagy-tavak környékén ilyenkor könnyebben fogható tokhalról; Farmer’s Almanac / észak-amerikai hagyomány.",
      "en": "August full moon (Sturgeon Moon): easier sturgeon catches around the Great Lakes — Farmer’s Almanac / North American tradition.",
      "de": "August-Vollmond (Sturgeon Moon): leichterer Störfang an den Großen Seen."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "kukoricahold": {
    "name": {
      "hu": "Kukoricahold",
      "en": "Corn Moon",
      "de": "Maismond"
    },
    "title": {
      "hu": "Kukoricahold",
      "en": "Corn Moon",
      "de": "Maismond"
    },
    "text": {
      "hu": "Szeptemberi telihold, ha nem esik az őszi napéjegyenlőség közelébe (akkor Aratáshold). A kukoricaaratáshoz kötött észak-amerikai név (Corn Moon).",
      "en": "September full moon when it is not near the autumn equinox (then Harvest Moon). Named for corn harvest in North American tradition.",
      "de": "September-Vollmond, wenn nicht nahe der Herbst-Tagundnachtgleiche (dann Erntemond). Nach der Maisernte benannt."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "aratashold": {
    "name": {
      "hu": "Aratáshold",
      "en": "Harvest Moon",
      "de": "Erntemond"
    },
    "title": {
      "hu": "Aratáshold",
      "en": "Harvest Moon",
      "de": "Erntemond"
    },
    "text": {
      "hu": "Az őszi napéjegyenlőséghez legközelebbi telihold (Harvest Moon). Híres arról, hogy napnyugta után hamar felkel, így hosszabb esti fényt ad az aratáshoz — európai és észak-amerikai hagyomány is ismeri.",
      "en": "Full moon nearest the autumn equinox (Harvest Moon). Rises soon after sunset, giving longer evening light for harvest — known in European and North American tradition.",
      "de": "Vollmond nahe der Herbst-Tagundnachtgleiche (Erntemond). Geht bald nach Sonnenuntergang auf und verlängert das Abendlicht."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Harvest_moon",
        "lang": "en",
        "label": "Harvest moon"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Harvest_moon",
        "lang": "en",
        "label": "Harvest moon"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Erntemond"
      }
    }
  },
  "vadaszhold": {
    "name": {
      "hu": "Vadászhold",
      "en": "Hunter's Moon",
      "de": "Jägermond"
    },
    "title": {
      "hu": "Vadászhold",
      "en": "Hunter's Moon",
      "de": "Jägermond"
    },
    "text": {
      "hu": "Az Aratáshold utáni telihold (Hunter’s Moon), tipikusan októberben. A vadászati szezonhoz kötött elnevezés; észak-amerikai / európai folklór.",
      "en": "The full moon after Harvest Moon (Hunter’s Moon), typically in October. Linked to hunting season in North American / European folklore.",
      "de": "Vollmond nach dem Erntemond (Jägermond), typisch im Oktober. Mit der Jagdsaison verbunden."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Harvest_and_hunter%27s_moons",
        "lang": "en",
        "label": "Hunter’s moon"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Harvest_and_hunter%27s_moons",
        "lang": "en",
        "label": "Hunter’s moon"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Jägermond"
      }
    }
  },
  "hodhold": {
    "name": {
      "hu": "Hódhold",
      "en": "Beaver Moon",
      "de": "Biber-Mond"
    },
    "title": {
      "hu": "Hódhold",
      "en": "Beaver Moon",
      "de": "Biber-Mond"
    },
    "text": {
      "hu": "Novemberi telihold (Beaver Moon): a hódok téli gátépítésének / a hódszőrme-vadászat idejének észak-amerikai emlékneve.",
      "en": "November full moon (Beaver Moon): beavers’ winter dam-building / beaver-fur hunting season in North American tradition.",
      "de": "November-Vollmond (Beaver Moon): Winterdammbau der Biber / Biberpelz-Saison."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "hideghold": {
    "name": {
      "hu": "Hideghold",
      "en": "Cold Moon",
      "de": "Kältemond"
    },
    "title": {
      "hu": "Hideghold",
      "en": "Cold Moon",
      "de": "Kältemond"
    },
    "text": {
      "hu": "Decemberi telihold (Cold Moon): a hosszú, hideg téli éjszakákról az észak-amerikai holdnév-hagyományban.",
      "en": "December full moon (Cold Moon): long, cold winter nights in the North American naming tradition.",
      "de": "Dezember-Vollmond (Cold Moon): lange, kalte Winternächte."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "kekhold": {
    "name": {
      "hu": "Kékhold",
      "en": "Blue Moon",
      "de": "Blaumond"
    },
    "title": {
      "hu": "Kékhold",
      "en": "Blue Moon",
      "de": "Blaumond"
    },
    "text": {
      "hu": "Két gyakori jelentés: (1) modern naptári: a második telihold ugyanabban a naptári hónapban; (2) szezonális (Farmer’s Almanac): a négy teliholdas évszak harmadik teliholdja. Sem a Hold, sem az ég nem kék tőle.",
      "en": "Two common meanings: (1) modern calendar: the second full moon in a calendar month; (2) seasonal (Farmer’s Almanac): the third full moon in a season with four. The Moon is not blue.",
      "de": "Zwei Bedeutungen: (1) modern: zweiter Vollmond im Kalendermonat; (2) saisonal (Farmer’s Almanac): dritter von vier Vollmonden einer Jahreszeit. Der Mond ist nicht blau."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Blue_moon",
        "lang": "en",
        "label": "Blue moon"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Blue_moon",
        "lang": "en",
        "label": "Blue moon"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Blue_Moon_(Kalender)",
        "lang": "de",
        "label": "Blue Moon (Kalender)"
      }
    }
  }
};
const GLOSSARY_I18N = {
  "kp": {
    "title": {
      "hu": "Kp-index",
      "en": "Kp index",
      "de": "Kp-Index"
    },
    "text": {
      "hu": "A Föld mágneses terének globális zavartságát mérő 0–9 skála (3 órás időközönként). 0 = nyugodt, 5 = kisebb geomágneses vihar (G1), 9 = extrém. A sarki fény oválja magasabb Kp mellett dél felé tolódik.",
      "en": "A 0–9 scale of global geomagnetic disturbance (3-hour intervals). 0 = quiet, 5 = minor storm (G1), 9 = extreme. Higher Kp pushes the aurora oval south.",
      "de": "Eine 0–9-Skala der globalen geomagnetischen Aktivität (3-Stunden-Werte). 0 = ruhig, 5 = kleiner Sturm (G1), 9 = extrem. Höheres Kp verschiebt das Polarlichtoval nach Süden."
    }
  },
  "ovation": {
    "title": {
      "hu": "OVATION",
      "en": "OVATION",
      "de": "OVATION"
    },
    "text": {
      "hu": "A NOAA rövid távú sarki fény valószínűségi modellje (Oval Variation, Assessment, Tracking, Intensity and Online Nowcasting). Adott földrajzi ponton százalékban becsüli az aurora előfordulását; közép-európai értékek általában alacsonyak.",
      "en": "NOAA’s short-term aurora probability model. It estimates percent chance at a location; central-European values are usually low.",
      "de": "NOAAs kurzfristiges Polarlicht-Wahrscheinlichkeitsmodell. Schätzt die Chance an einem Ort; in Mitteleuropa meist niedrig."
    }
  },
  "geomag": {
    "title": {
      "hu": "Geomágneses szélesség",
      "en": "Geomagnetic latitude",
      "de": "Geomagnetische Breite"
    },
    "text": {
      "hu": "A földrajzi szélességhez hasonló, de a mágneses pólusokhoz igazított koordináta. A sarki fény határai ehhez igazodnak, nem a földrajzi szélességhez — ezért Észak-Amerikában alacsonyabb földrajzi szélességen is gyakrabban látszik aurora.",
      "en": "Like geographic latitude but aligned to the magnetic poles. Aurora boundaries follow this, not geographic latitude.",
      "de": "Ähnlich der geografischen Breite, aber auf die Magnetpole bezogen. Polarlichtgrenzen folgen ihr."
    }
  },
  "gskala": {
    "title": {
      "hu": "NOAA G-skála",
      "en": "NOAA G-scale",
      "de": "NOAA G-Skala"
    },
    "text": {
      "hu": "Geomágneses viharok NOAA-besorolása G0–G5. G1 (Kp≈5) kisebb, G5 (Kp≈9) extrém vihar. Hatással lehet az áramhálózatra, műholdakra és a rádiós összeköttetésre is.",
      "en": "Geomagnetic storm scale G0–G5. G1 (Kp≈5) minor, G5 (Kp≈9) extreme. Can affect power grids, satellites and radio.",
      "de": "Geomagnetische Sturm-Skala G0–G5. G1 (Kp≈5) gering, G5 (Kp≈9) extrem."
    }
  },
  "napszel": {
    "title": {
      "hu": "Napszél",
      "en": "Solar wind",
      "de": "Sonnenwind"
    },
    "text": {
      "hu": "A Napból kiáramló töltött részecskék (főként protonok és elektronok) folyama. Sebessége tipikusan 300–800 km/s; a Föld mágneses terével találkozva sarki fényt és geomágneses zavart okozhat.",
      "en": "Stream of charged particles from the Sun (mostly protons and electrons), typically 300–800 km/s.",
      "de": "Strom geladener Teilchen von der Sonne (meist Protonen und Elektronen), typisch 300–800 km/s."
    }
  },
  "bz": {
    "title": {
      "hu": "IMF Bz",
      "en": "IMF Bz",
      "de": "IMF Bz"
    },
    "text": {
      "hu": "A bolygóközi mágneses mező (IMF) északi–déli komponense GSM koordinátákban. Negatív (délies) Bz esetén a napszél energiája könnyebben csatolódik a Föld mágneses teréhez, és nő a sarki fény esélye.",
      "en": "North–south component of the interplanetary magnetic field in GSM. Negative (southward) Bz couples solar-wind energy more easily into Earth’s magnetosphere.",
      "de": "Nord–Süd-Komponente des interplanetaren Magnetfelds (GSM). Negatives (südliches) Bz koppelt Sonnenwindenergie leichter ein."
    }
  },
  "bt": {
    "title": {
      "hu": "IMF Bt",
      "en": "IMF Bt",
      "de": "IMF Bt"
    },
    "text": {
      "hu": "A bolygóközi mágneses mező teljes térerőssége (nT). Önmagában nem dönti el a sarki fényt, de erős mező + délies Bz kombinációja kedvező.",
      "en": "Total interplanetary magnetic field strength (nT). Strong field plus southward Bz favors aurora.",
      "de": "Gesamtstärke des interplanetaren Magnetfelds (nT). Starkes Feld plus südliches Bz begünstigt Polarlicht."
    }
  },
  "libracio": {
    "title": {
      "hu": "Libráció",
      "en": "Libration",
      "de": "Libration"
    },
    "text": {
      "hu": "A Hold látszólagos „billegése”, aminek köszönhetően a felületének kb. 59%-át láthatjuk idővel. Az elontúdó (kelet–nyugat) és elattúdó (észak–dél) szögeltérést fokban adjuk meg.",
      "en": "The Moon’s apparent wobble; over time about 59% of the surface is visible.",
      "de": "Scheinbares Wackeln des Mondes; langfristig sind etwa 59 % der Oberfläche sichtbar."
    }
  },
  "magnitudó": {
    "title": {
      "hu": "Magnitúdó",
      "en": "Magnitude",
      "de": "Magnitude"
    },
    "text": {
      "hu": "Csillagászati fényességskála: minél kisebb (akár negatív) a szám, annál fényesebb az objektum. Szabad szemmel kb. 6 mag-ig láthatók a csillagok ideális, sötét égen.",
      "en": "Astronomical brightness scale: smaller (even negative) means brighter. Naked-eye limit ~6 mag under dark skies.",
      "de": "Helligkeitsskala: je kleiner (auch negativ), desto heller. Grenze freier Auge ~6 mag."
    }
  },
  "azimut": {
    "title": {
      "hu": "Azimut",
      "en": "Azimuth",
      "de": "Azimut"
    },
    "text": {
      "hu": "Vízszintes irány a horizonton: 0° = észak, 90° = kelet, 180° = dél, 270° = nyugat. Megmondja, merre nézz, ha meg akarod találni az égitestet.",
      "en": "Horizontal direction: 0° north, 90° east, 180° south, 270° west.",
      "de": "Horizontale Richtung: 0° Nord, 90° Ost, 180° Süd, 270° West."
    }
  },
  "magassag": {
    "title": {
      "hu": "Magasság (eleváció)",
      "en": "Altitude (elevation)",
      "de": "Höhe (Elevation)"
    },
    "text": {
      "hu": "Szög a horizont felett: 0° a horizont, 90° a zenit (pontosan feletted). Negatív érték azt jelenti, hogy az objektum a horizont alatt van.",
      "en": "Angle above the horizon: 0° horizon, 90° zenith. Negative means below the horizon.",
      "de": "Winkel über dem Horizont: 0° Horizont, 90° Zenit. Negativ = unter dem Horizont."
    }
  },
  "polgari": {
    "title": {
      "hu": "Polgári szürkület",
      "en": "Civil twilight",
      "de": "Bürgerliche Dämmerung"
    },
    "text": {
      "hu": "Amíg a Nap középpontja 0° és −6° között van a horizont alatt. Még világos az égbolt ahhoz, hogy kültéri tevékenységet lámpa nélkül végezzünk; a legfényesebb bolygók már megjelenhetnek.",
      "en": "While the Sun’s center is between 0° and −6°. Outdoor activity without lights is still possible; brightest planets may appear.",
      "de": "Sonne zwischen 0° und −6°. Outdoor-Aktivitäten ohne Licht noch möglich; hellste Planeten sichtbar."
    }
  },
  "tengeri": {
    "title": {
      "hu": "Tengerészeti szürkület",
      "en": "Nautical twilight",
      "de": "Nautische Dämmerung"
    },
    "text": {
      "hu": "A Nap −6° és −12° között van. A horizont még kivehető, a fényesebb csillagok már látszanak — hagyományosan a tengeri navigációhoz kötődik.",
      "en": "Sun between −6° and −12°. Horizon still visible; brighter stars appear.",
      "de": "Sonne zwischen −6° und −12°. Horizont noch sichtbar; hellere Sterne erscheinen."
    }
  },
  "csill_szurk": {
    "title": {
      "hu": "Csillagászati szürkület",
      "en": "Astronomical twilight",
      "de": "Astronomische Dämmerung"
    },
    "text": {
      "hu": "A Nap −12° és −18° között. Vége után (−18° alatt) kezdődik a csillagászati éjszaka: az ég gyakorlatilag teljesen sötét, ideális a halvány objektumokhoz.",
      "en": "Sun between −12° and −18°. After it ends (−18°), astronomical night begins.",
      "de": "Sonne zwischen −12° und −18°. Danach beginnt die astronomische Nacht."
    }
  },
  "aranyora": {
    "title": {
      "hu": "Aranyóra",
      "en": "Golden hour",
      "de": "Goldene Stunde"
    },
    "text": {
      "hu": "Napnyugta (vagy napkelte) körüli periódus, amikor a Nap alacsony (kb. 6° felett a horizonton), és meleg, aranyló fényt ad — fotósok kedvence.",
      "en": "Around sunset/sunrise when the Sun is low (~6° above), giving warm golden light — popular with photographers.",
      "de": "Um Sonnenuntergang/-aufgang bei tiefer Sonne (~6°), warmes goldenes Licht."
    }
  },
  "kekora": {
    "title": {
      "hu": "Kék óra",
      "en": "Blue hour",
      "de": "Blaue Stunde"
    },
    "text": {
      "hu": "Nem sokkal napnyugta után (vagy napkelte előtt), amikor a Nap kb. −4° és −8° között van: az ég mélykék, egyenletes fényű, mesterséges fények szépen kirajzolódnak.",
      "en": "Shortly after sunset (or before sunrise) when the Sun is about −4° to −8°: deep blue sky, even light.",
      "de": "Kurz nach Sonnenuntergang (oder vor Aufgang), Sonne etwa −4° bis −8°: tiefblauer Himmel."
    }
  },
  "szuperhold": {
    "title": {
      "hu": "Szuperhold",
      "en": "Supermoon",
      "de": "Supermond"
    },
    "text": {
      "hu": "Telihold (néha újhold), amikor a Hold közel van a földközelponthoz (perigee), ezért kissé nagyobbnak és fényesebbnek látszik. A különbség szabad szemmel szerény (~10–14%).",
      "en": "A full moon (sometimes new moon) near perigee, so it looks slightly larger and brighter. The difference is modest to the naked eye (~10–14%).",
      "de": "Vollmond (manchmal Neumond) nahe dem Perigäum — wirkt etwas größer und heller. Mit bloßem Auge ist der Unterschied bescheiden (~10–14%)."
    },
    "wiki": {
      "hu": {
        "url": "https://hu.wikipedia.org/wiki/Szuperhold",
        "lang": "hu",
        "label": "Szuperhold — Wikipédia"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Supermoon",
        "lang": "en",
        "label": "Supermoon"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Supermond",
        "lang": "de",
        "label": "Supermond"
      }
    }
  },
  "perigee": {
    "title": {
      "hu": "Földközelpont (perigee)",
      "en": "Perigee",
      "de": "Perigäum"
    },
    "text": {
      "hu": "A Hold pályájának Földhöz legközelebbi pontja. Itt a Hold látszólagos átmérője a legnagyobb.",
      "en": "Closest point of the Moon’s orbit to Earth — largest apparent diameter.",
      "de": "Erdnahster Punkt der Mondbahn — größter scheinbarer Durchmesser."
    }
  },
  "apogee": {
    "title": {
      "hu": "Földtávolpont (apogee)",
      "en": "Apogee",
      "de": "Apogäum"
    },
    "text": {
      "hu": "A Hold pályájának Földtől legtávolabbi pontja. Ilyenkor a telihold kisebbnek tűnik („mikrohold”).",
      "en": "Farthest point of the Moon’s orbit — full moon looks smaller (“micromoon”).",
      "de": "Erdfernster Punkt der Mondbahn — Vollmond wirkt kleiner („Mikromond“)."
    }
  },
  "napegyen": {
    "title": {
      "hu": "Napéjegyenlőség",
      "en": "Equinox",
      "de": "Tagundnachtgleiche"
    },
    "text": {
      "hu": "Amikor a Nap az égbolton az égi egyenlítőt keresztezi (március és szeptember körül): a nappal és az éjszaka a Földön közel egyenlő hosszú. A csillagászati tavasz, illetve ősz kezdete.",
      "en": "When the Sun crosses the celestial equator (~March and September): day and night nearly equal. Start of astronomical spring/autumn.",
      "de": "Sonne kreuzt den Himmelsäquator (~März/September): Tag und Nacht nahezu gleich. Beginn von Frühling/Herbst."
    }
  },
  "napfordulo": {
    "title": {
      "hu": "Napforduló",
      "en": "Solstice",
      "de": "Sonnenwende"
    },
    "text": {
      "hu": "Amikor a Nap delelési magassága szélsőértéket ér el (június: leghosszabb nappal, december: legrövidebb). A csillagászati nyár, illetve tél kezdete.",
      "en": "When the Sun’s noon altitude is extreme (June: longest day, December: shortest). Start of astronomical summer/winter.",
      "de": "Extreme Mittagshöhe der Sonne (Juni: längster Tag, Dezember: kürzester). Beginn von Sommer/Winter."
    }
  },
  "meteorraj": {
    "title": {
      "hu": "Meteorraj",
      "en": "Meteor shower",
      "de": "Meteorstrom"
    },
    "text": {
      "hu": "A Föld meteoroid-árammal találkozik (gyakran üstökös porával). A meteorek látszólag egy pontból, a radiánsból „sugároznak”. A maximum körül a legtöbb hullócsillag látható.",
      "en": "Earth meets a meteoroid stream (often comet dust). Meteors appear to radiate from a radiant.",
      "de": "Die Erde trifft einen Meteoroidenstrom (oft Kometenstaub). Meteore scheinen von einem Radianten zu kommen."
    }
  },
  "zhr": {
    "title": {
      "hu": "ZHR",
      "en": "ZHR",
      "de": "ZHR"
    },
    "text": {
      "hu": "Zenithal Hourly Rate: ideális körülmények között (radiáns a zeniten, tiszta, sötét ég) várható meteorszám óránként. A ténylegesen látható szám ennél általában kisebb.",
      "en": "Zenithal Hourly Rate: expected meteors per hour under ideal conditions (radiant at zenith, dark clear sky). Real counts are usually lower.",
      "de": "Zenithal Hourly Rate: erwartete Meteore/Stunde unter Idealbedingungen. Reale Zahlen meist niedriger."
    }
  },
  "radians": {
    "title": {
      "hu": "Radiáns",
      "en": "Radiant",
      "de": "Radiant"
    },
    "text": {
      "hu": "Az az égboltpont (csillagképben), ahonnan egy meteorraj tagjai látszólag kiindulnak. Maga a radiáns nem „lő ki” meteort — a párhuzamos pályák perspektívahatása.",
      "en": "Sky point (in a constellation) from which shower meteors appear to originate — a perspective effect.",
      "de": "Himmelspunkt, von dem die Meteore eines Stroms zu kommen scheinen — Perspektiveffekt."
    }
  },
  "szembenallas": {
    "title": {
      "hu": "Szembenállás",
      "en": "Opposition",
      "de": "Opposition"
    },
    "text": {
      "hu": "Amikor egy külső bolygó a Földdel ellentétes oldalon van a Naphoz képest: egész éjjel látható, delelése éjfél körül van, és általában a legfényesebb / legközelebbi időszak.",
      "en": "An outer planet opposite the Sun as seen from Earth: up all night, culminates near midnight, often brightest/closest.",
      "de": "Äußerer Planet der Sonne gegenüber: ganze Nacht sichtbar, Kulmination gegen Mitternacht."
    }
  },
  "egyuttallas": {
    "title": {
      "hu": "Együttállás",
      "en": "Conjunction",
      "de": "Konjunktion"
    },
    "text": {
      "hu": "Két égitest (pl. bolygó–Hold vagy két bolygó) közel jelenik meg az égen, kis szögtávolságra. Nem jelenti, hogy fizikailag közel vannak egymáshoz.",
      "en": "Two bodies appear close in the sky (small angular separation). Not physical proximity.",
      "de": "Zwei Gestirne erscheinen am Himmel nahe beieinander (kleiner Winkelabstand)."
    }
  },
  "kiteres": {
    "title": {
      "hu": "Kitérés (elongáció)",
      "en": "Elongation",
      "de": "Elongation"
    },
    "text": {
      "hu": "A Merkúr vagy a Vénusz szögtávolsága a Naptól az égen. Legnagyobb keleti/nyugati kitéréskor ezek a bolygók a legkönnyebben megfigyelhetők este, illetve hajnalban.",
      "en": "Angular distance of Mercury or Venus from the Sun. Greatest eastern/western elongation favors evening/morning viewing.",
      "de": "Winkelabstand von Merkur/Venus zur Sonne. Größte östliche/westliche Elongation begünstigt Sichtbarkeit."
    }
  },
  "felarnyek": {
    "title": {
      "hu": "Félárnyékos holdfogyatkozás",
      "en": "Penumbral lunar eclipse",
      "de": "Halbschatten-Mondfinsternis"
    },
    "text": {
      "hu": "A Hold csak a Föld félárnyékán (penumbra) halad át. Az elhalványulás gyakran szabad szemmel alig észrevehető, ellentétben a részleges vagy teljes holdfogyatkozással.",
      "en": "The Moon only passes through Earth’s penumbra. Dimming is often hard to notice with the naked eye.",
      "de": "Der Mond durchquert nur den Halbschatten. Die Abdunkelung ist oft kaum sichtbar."
    }
  },
  "reszleges": {
    "title": {
      "hu": "Részleges fogyatkozás",
      "en": "Partial eclipse",
      "de": "Partielle Finsternis"
    },
    "text": {
      "hu": "Az égitest korongjának csak egy része kerül árnyékba (Hold), illetve a Hold csak részben takarja a Napot. Napfogyatkozásnál mindig napszűrő kell!",
      "en": "Only part of the disk is shadowed (Moon) or the Moon only partly covers the Sun. For solar eclipses always use a solar filter!",
      "de": "Nur ein Teil der Scheibe ist verdunkelt bzw. bedeckt. Bei Sonnenfinsternissen immer Sonnenfilter!"
    }
  },
  "megvilagitottsag": {
    "title": {
      "hu": "Megvilágítottság",
      "en": "Illumination",
      "de": "Beleuchtung"
    },
    "text": {
      "hu": "A Hold (vagy bolygó) felénk néző oldalának napfényes hányada százalékban. Újhold ≈ 0%, telihold ≈ 100%. Nem azonos a fázis nevével pontosan a negyedeknél sem.",
      "en": "Sunlit fraction of the Moon’s (or planet’s) facing side. New ≈0%, full ≈100%.",
      "de": "Sonnenerleuchteter Anteil der zugewandten Seite. Neu ≈0 %, Voll ≈100 %."
    }
  },
  "novekvo": {
    "title": {
      "hu": "Növekvő / fogyó fázis",
      "en": "Waxing / waning",
      "de": "Zunehmend / abnehmend"
    },
    "text": {
      "hu": "Újhold után a Hold „növekszik” (sarló → első negyed → domború → telihold), majd „fogy” (domború → utolsó negyed → sarló). Az északi féltekén a növekvő Hold jobb oldala világos.",
      "en": "After new moon the Moon waxes (crescent → first quarter → gibbous → full), then wanes. In the northern hemisphere the waxing Moon is lit on the right.",
      "de": "Nach Neumond nimmt der Mond zu, danach ab. Auf der Nordhalbkugel ist der zunehmende Mond rechts beleuchtet."
    }
  },
  "holdkor": {
    "title": {
      "hu": "Hold kora",
      "en": "Moon age",
      "de": "Mondalter"
    },
    "text": {
      "hu": "Az eltelt napok száma az utolsó újhold óta. Egy szinomikus hónap kb. 29,5 nap; 0 nap ≈ újhold, ~14,8 nap ≈ telihold.",
      "en": "Days since the last new moon. Synodic month ≈29.5 days; 0 ≈ new, ~14.8 ≈ full.",
      "de": "Tage seit dem letzten Neumond. Synodischer Monat ≈29,5 Tage; 0 ≈ Neu, ~14,8 ≈ Voll."
    }
  },
  "iss": {
    "title": {
      "hu": "ISS",
      "en": "ISS",
      "de": "ISS"
    },
    "text": {
      "hu": "A Nemzetközi Űrállomás (International Space Station) kb. 400 km magasan kering, ~90 percenként kerüli meg a Földet. Tiszta égen mozgó, fényes pontként látszik — nem villog, mint a csillagok.",
      "en": "International Space Station ~400 km up, orbits ~every 90 minutes. Appears as a bright moving point — does not twinkle like stars.",
      "de": "Internationale Raumstation ~400 km hoch, Umlauf ~90 Min. Heller wandernder Punkt — flackert nicht wie Sterne."
    }
  },
  "tle": {
    "title": {
      "hu": "TLE",
      "en": "TLE",
      "de": "TLE"
    },
    "text": {
      "hu": "Two-Line Element: két soros pályaelem-készlet, amellyel a műhold közelítő helyzete számolható (SGP4 modell). A Celestrak és más katalógusok rendszeresen frissítik.",
      "en": "Two-Line Element set for approximate satellite position (SGP4). Updated by Celestrak and others.",
      "de": "Two-Line Element: Bahnelemente zur Näherungsposition (SGP4)."
    }
  },
  "athaladas": {
    "title": {
      "hu": "Áthaladás (pass)",
      "en": "Pass",
      "de": "Überflug"
    },
    "text": {
      "hu": "Az az időszak, amíg egy műhold a megfigyelő horizontja felett van. A „látható” ISS-áthaladáshoz sötét ég, megvilágított űrállomás és megfelelő max. magasság kell.",
      "en": "Period while a satellite is above the observer’s horizon. A “visible” ISS pass needs dark sky, sunlit station and enough max altitude.",
      "de": "Zeitraum, in dem ein Satellit über dem Horizont ist. Sichtbare ISS: dunkler Himmel, beleuchtete Station, ausreichende Höhe."
    }
  },
  "sgp4": {
    "title": {
      "hu": "SGP4",
      "en": "SGP4",
      "de": "SGP4"
    },
    "text": {
      "hu": "Standard pályaterjesztő algoritmus alacsony Föld körüli műholdakhoz. A TLE-ből percek–napok távlatában jó közelítéssel megadja a műhold helyzetét.",
      "en": "Standard propagator for low-Earth satellites from TLE data.",
      "de": "Standard-Bahnpropagator für LEO-Satelliten aus TLE-Daten."
    }
  },
  "farkashold": {
    "title": {
      "hu": "Farkashold",
      "en": "Wolf Moon",
      "de": "Wolfsmond"
    },
    "text": {
      "hu": "Januári telihold. Az elnevezés észak-amerikai folklórból / az Old Farmer’s Almanac hagyományából származik: a farkasok hangos januári üvöltéséhez kötötték. Nem magyar néphagyomány.",
      "en": "January full moon. The name comes from North American folklore / the Old Farmer’s Almanac tradition, linked to wolves howling in midwinter. Not a Hungarian folk name.",
      "de": "Januar-Vollmond. Der Name stammt aus nordamerikanischer Folklore / dem Old Farmer’s Almanac und bezieht sich auf heulende Wölfe im Hochwinter. Kein ungarischer Volksname."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "hohold": {
    "title": {
      "hu": "Hóhold",
      "en": "Snow Moon",
      "de": "Schneemond"
    },
    "text": {
      "hu": "Februári telihold. Az erős havazásról kapta a nevét az észak-amerikai hagyományban (Snow Moon, Old Farmer’s Almanac).",
      "en": "February full moon, named for heavy snowfall in the North American / Old Farmer’s Almanac tradition.",
      "de": "Februar-Vollmond; nach starkem Schneefall in der nordamerikanischen / Old-Farmer’s-Almanac-Tradition (Snow Moon)."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "fereghold": {
    "title": {
      "hu": "Féreghold",
      "en": "Worm Moon",
      "de": "Wurm-Mond"
    },
    "text": {
      "hu": "Márciusi telihold (Worm Moon). A talajolvadáskor megjelenő földigiliszta-aktivitáshoz kötötték; észak-amerikai / Farmer’s Almanac hagyomány.",
      "en": "March full moon (Worm Moon), tied to earthworm activity as the ground thaws — North American / Farmer’s Almanac tradition.",
      "de": "März-Vollmond (Worm Moon); mit Regenwurm-Aktivität beim Bodentauen verbunden — nordamerikanische Tradition."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "rozsaszin": {
    "title": {
      "hu": "Rózsaszín Hold",
      "en": "Pink Moon",
      "de": "Rosa Mond"
    },
    "text": {
      "hu": "Áprilisi telihold (Pink Moon). Nem a Hold színe: a korai vad flox (pink moss phlox) virágzásáról nevezték el az észak-amerikai hagyományban.",
      "en": "April full moon (Pink Moon). Not the Moon’s color — named for early wild ground phlox in North American tradition.",
      "de": "April-Vollmond (Pink Moon). Nicht die Mondfarbe — nach früh blühendem Phlox in nordamerikanischer Tradition."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "viraghold": {
    "title": {
      "hu": "Virághold",
      "en": "Flower Moon",
      "de": "Blumenmond"
    },
    "text": {
      "hu": "Májusi telihold (Flower Moon): a tavaszi virágözönről az észak-amerikai holdnév-hagyomány szerint.",
      "en": "May full moon (Flower Moon): spring blossoms in the North American naming tradition.",
      "de": "Mai-Vollmond (Flower Moon): Frühlingsblüte in der nordamerikanischen Namensgebung."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "eperhold": {
    "title": {
      "hu": "Eperhold",
      "en": "Strawberry Moon",
      "de": "Erdbeermond"
    },
    "text": {
      "hu": "Júniusi telihold (Strawberry Moon): az erdei szamóca érésének idejéhez kötött észak-amerikai elnevezés.",
      "en": "June full moon (Strawberry Moon): ripening of wild strawberries in North American tradition.",
      "de": "Juni-Vollmond (Strawberry Moon): Reife der Walderdbeeren in nordamerikanischer Tradition."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "bakhold": {
    "title": {
      "hu": "Bakhold",
      "en": "Buck Moon",
      "de": "Bockmond"
    },
    "text": {
      "hu": "Júliusi telihold (Buck Moon): a hím szarvasok új agancsnövekedéséhez kapcsolt észak-amerikai név.",
      "en": "July full moon (Buck Moon): new antler growth on male deer in North American tradition.",
      "de": "Juli-Vollmond (Buck Moon): neues Geweihwachstum männlicher Hirsche."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "tokhalhold": {
    "title": {
      "hu": "Tokhalhold",
      "en": "Sturgeon Moon",
      "de": "Störmond"
    },
    "text": {
      "hu": "Augusztusi telihold (Sturgeon Moon): a Nagy-tavak környékén ilyenkor könnyebben fogható tokhalról; Farmer’s Almanac / észak-amerikai hagyomány.",
      "en": "August full moon (Sturgeon Moon): easier sturgeon catches around the Great Lakes — Farmer’s Almanac / North American tradition.",
      "de": "August-Vollmond (Sturgeon Moon): leichterer Störfang an den Großen Seen."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "kukoricahold": {
    "title": {
      "hu": "Kukoricahold",
      "en": "Corn Moon",
      "de": "Maismond"
    },
    "text": {
      "hu": "Szeptemberi telihold, ha nem esik az őszi napéjegyenlőség közelébe (akkor Aratáshold). A kukoricaaratáshoz kötött észak-amerikai név (Corn Moon).",
      "en": "September full moon when it is not near the autumn equinox (then Harvest Moon). Named for corn harvest in North American tradition.",
      "de": "September-Vollmond, wenn nicht nahe der Herbst-Tagundnachtgleiche (dann Erntemond). Nach der Maisernte benannt."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "aratashold": {
    "title": {
      "hu": "Aratáshold",
      "en": "Harvest Moon",
      "de": "Erntemond"
    },
    "text": {
      "hu": "Az őszi napéjegyenlőséghez legközelebbi telihold (Harvest Moon). Híres arról, hogy napnyugta után hamar felkel, így hosszabb esti fényt ad az aratáshoz — európai és észak-amerikai hagyomány is ismeri.",
      "en": "Full moon nearest the autumn equinox (Harvest Moon). Rises soon after sunset, giving longer evening light for harvest — known in European and North American tradition.",
      "de": "Vollmond nahe der Herbst-Tagundnachtgleiche (Erntemond). Geht bald nach Sonnenuntergang auf und verlängert das Abendlicht."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Harvest_moon",
        "lang": "en",
        "label": "Harvest moon"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Harvest_moon",
        "lang": "en",
        "label": "Harvest moon"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Erntemond"
      }
    }
  },
  "vadaszhold": {
    "title": {
      "hu": "Vadászhold",
      "en": "Hunter's Moon",
      "de": "Jägermond"
    },
    "text": {
      "hu": "Az Aratáshold utáni telihold (Hunter’s Moon), tipikusan októberben. A vadászati szezonhoz kötött elnevezés; észak-amerikai / európai folklór.",
      "en": "The full moon after Harvest Moon (Hunter’s Moon), typically in October. Linked to hunting season in North American / European folklore.",
      "de": "Vollmond nach dem Erntemond (Jägermond), typisch im Oktober. Mit der Jagdsaison verbunden."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Harvest_and_hunter%27s_moons",
        "lang": "en",
        "label": "Hunter’s moon"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Harvest_and_hunter%27s_moons",
        "lang": "en",
        "label": "Hunter’s moon"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Jägermond"
      }
    }
  },
  "hodhold": {
    "title": {
      "hu": "Hódhold",
      "en": "Beaver Moon",
      "de": "Biber-Mond"
    },
    "text": {
      "hu": "Novemberi telihold (Beaver Moon): a hódok téli gátépítésének / a hódszőrme-vadászat idejének észak-amerikai emlékneve.",
      "en": "November full moon (Beaver Moon): beavers’ winter dam-building / beaver-fur hunting season in North American tradition.",
      "de": "November-Vollmond (Beaver Moon): Winterdammbau der Biber / Biberpelz-Saison."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "hideghold": {
    "title": {
      "hu": "Hideghold",
      "en": "Cold Moon",
      "de": "Kältemond"
    },
    "text": {
      "hu": "Decemberi telihold (Cold Moon): a hosszú, hideg téli éjszakákról az észak-amerikai holdnév-hagyományban.",
      "en": "December full moon (Cold Moon): long, cold winter nights in the North American naming tradition.",
      "de": "Dezember-Vollmond (Cold Moon): lange, kalte Winternächte."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Full_moon#Full_moon_names",
        "lang": "en",
        "label": "Full moon names"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Vollmond#Bezeichnungen",
        "lang": "de",
        "label": "Vollmond-Bezeichnungen"
      }
    }
  },
  "kekhold": {
    "title": {
      "hu": "Kékhold",
      "en": "Blue Moon",
      "de": "Blaumond"
    },
    "text": {
      "hu": "Két gyakori jelentés: (1) modern naptári: a második telihold ugyanabban a naptári hónapban; (2) szezonális (Farmer’s Almanac): a négy teliholdas évszak harmadik teliholdja. Sem a Hold, sem az ég nem kék tőle.",
      "en": "Two common meanings: (1) modern calendar: the second full moon in a calendar month; (2) seasonal (Farmer’s Almanac): the third full moon in a season with four. The Moon is not blue.",
      "de": "Zwei Bedeutungen: (1) modern: zweiter Vollmond im Kalendermonat; (2) saisonal (Farmer’s Almanac): dritter von vier Vollmonden einer Jahreszeit. Der Mond ist nicht blau."
    },
    "wiki": {
      "hu": {
        "url": "https://en.wikipedia.org/wiki/Blue_moon",
        "lang": "en",
        "label": "Blue moon"
      },
      "en": {
        "url": "https://en.wikipedia.org/wiki/Blue_moon",
        "lang": "en",
        "label": "Blue moon"
      },
      "de": {
        "url": "https://de.wikipedia.org/wiki/Blue_Moon_(Kalender)",
        "lang": "de",
        "label": "Blue Moon (Kalender)"
      }
    }
  }
};
const GLOSSARY_ALIASES = {
  "kp": [
    "Kp index",
    "Kp-index",
    "Kp"
  ],
  "ovation": [
    "OVATION"
  ],
  "geomag": [
    "geomágneses szélesség",
    "Geomágneses szélesség",
    "geomagnetic latitude"
  ],
  "gskala": [
    "G-skála",
    "NOAA G-skála",
    "G-skala",
    "G-scale"
  ],
  "napszel": [
    "napszél",
    "Napszél",
    "solar wind",
    "Sonnenwind"
  ],
  "bz": [
    "IMF Bz",
    "Bz (GSM)",
    "Bz"
  ],
  "bt": [
    "IMF Bt",
    "Bt"
  ],
  "libracio": [
    "libráció",
    "Libráció",
    "libration"
  ],
  "magnitudó": [
    "magnitúdó",
    "Magnitúdó",
    "mag",
    "magnitude",
    "Magnitude"
  ],
  "azimut": [
    "azimut",
    "Azimut",
    "azimuth"
  ],
  "magassag": [
    "magasság",
    "Magasság",
    "eleváció",
    "Eleváció",
    "altitude"
  ],
  "polgari": [
    "polgári szürkület",
    "Polgári szürkület",
    "civil twilight"
  ],
  "tengeri": [
    "tengerészeti szürkület",
    "Tengerészeti szürkület",
    "nautikai szürkület",
    "nautical twilight"
  ],
  "csill_szurk": [
    "csillagászati szürkület",
    "Csill. szürkület",
    "csill. szürkület",
    "astronomical twilight"
  ],
  "aranyora": [
    "aranyóra",
    "Aranyóra",
    "golden hour",
    "Goldene Stunde"
  ],
  "kekora": [
    "kék óra",
    "Kék óra",
    "blue hour",
    "Blaue Stunde"
  ],
  "szuperhold": [
    "szuperhold",
    "Szuperhold",
    "supermoon",
    "Supermoon",
    "Supermond"
  ],
  "perigee": [
    "földközelpont",
    "perigee",
    "Perigee",
    "Perigäum"
  ],
  "apogee": [
    "földtávolpont",
    "apogee",
    "Apogee",
    "Apogäum"
  ],
  "napegyen": [
    "napéjegyenlőség",
    "Napéjegyenlőség",
    "equinox",
    "Tagundnachtgleiche"
  ],
  "napfordulo": [
    "napforduló",
    "Napforduló",
    "solstice",
    "Sonnenwende"
  ],
  "meteorraj": [
    "meteorraj",
    "Meteorraj",
    "hullócsillag",
    "meteor shower",
    "Meteorstrom"
  ],
  "zhr": [
    "ZHR",
    "zhr"
  ],
  "radians": [
    "radiáns",
    "Radiáns",
    "radiant",
    "Radiant"
  ],
  "szembenallas": [
    "szembenállás",
    "Szembenállás",
    "oppozíció",
    "oppozicio",
    "opposition",
    "Opposition"
  ],
  "egyuttallas": [
    "együttállás",
    "Együttállás",
    "konjunkció",
    "conjunction",
    "Konjunktion"
  ],
  "kiteres": [
    "kitérés",
    "Kitérés",
    "elongáció",
    "elongacio",
    "elongation",
    "Elongation"
  ],
  "felarnyek": [
    "félárnyékos holdfogyatkozás",
    "Félárnyékos holdfogyatkozás",
    "félárnyékos",
    "penumbral"
  ],
  "reszleges": [
    "részleges fogyatkozás",
    "részleges",
    "partial eclipse"
  ],
  "megvilagitottsag": [
    "megvilágítottság",
    "Megvilágítottság",
    "illumination"
  ],
  "novekvo": [
    "növekvő sarló",
    "fogyó sarló",
    "növekvő hold",
    "fogyó hold",
    "első negyed",
    "utolsó negyed",
    "telihold",
    "újhold",
    "Full Moon",
    "New Moon",
    "Vollmond",
    "Neumond"
  ],
  "holdkor": [
    "Hold kora",
    "hold kora",
    "kor",
    "Moon age"
  ],
  "iss": [
    "ISS",
    "Nemzetközi Űrállomás",
    "űrállomás",
    "International Space Station"
  ],
  "tle": [
    "TLE"
  ],
  "athaladas": [
    "áthaladás",
    "Áthaladás",
    "pass",
    "Überflug"
  ],
  "sgp4": [
    "SGP4"
  ],
  "farkashold": [
    "Farkashold",
    "Wolf Moon",
    "Wolfsmond",
    "farkashold"
  ],
  "hohold": [
    "Hóhold",
    "Snow Moon",
    "Schneemond",
    "hóhold"
  ],
  "fereghold": [
    "Féreghold",
    "Worm Moon",
    "Wurm-Mond",
    "féreghold"
  ],
  "rozsaszin": [
    "Rózsaszín Hold",
    "Pink Moon",
    "Rosa Mond",
    "rózsaszín hold"
  ],
  "viraghold": [
    "Virághold",
    "Flower Moon",
    "Blumenmond",
    "virághold"
  ],
  "eperhold": [
    "Eperhold",
    "Strawberry Moon",
    "Erdbeermond",
    "eperhold"
  ],
  "bakhold": [
    "Bakhold",
    "Buck Moon",
    "Bockmond",
    "bakhold"
  ],
  "tokhalhold": [
    "Tokhalhold",
    "Sturgeon Moon",
    "Störmond",
    "tokhalhold"
  ],
  "kukoricahold": [
    "Kukoricahold",
    "Corn Moon",
    "Maismond",
    "kukoricahold"
  ],
  "aratashold": [
    "Aratáshold",
    "Harvest Moon",
    "Erntemond",
    "aratáshold"
  ],
  "vadaszhold": [
    "Vadászhold",
    "Hunter's Moon",
    "Jägermond",
    "vadászhold"
  ],
  "hodhold": [
    "Hódhold",
    "Beaver Moon",
    "Biber-Mond",
    "hódhold"
  ],
  "hideghold": [
    "Hideghold",
    "Cold Moon",
    "Kältemond",
    "hideghold"
  ],
  "kekhold": [
    "Kékhold",
    "Blue Moon",
    "Blaumond",
    "kékhold"
  ]
};
const EV_I18N = [
  [
    "2026-11-17T22:00Z",
    "m",
    {
      "hu": "Leonidák meteorraj maximuma",
      "en": "Leonids meteor shower peak",
      "de": "Leoniden-Maximum"
    },
    {
      "hu": "Nov. 17/18 éjjel, óránként kb. 15 meteor. A radiáns (Oroszlán) éjfél után emelkedik magasra.",
      "en": "Night of Nov 17/18, ~15 meteors/hour. The radiant (Leo) rises high after midnight.",
      "de": "Nacht 17./18. Nov., ~15 Meteore/Std. Radiant (Löwe) steigt nach Mitternacht hoch."
    }
  ],
  [
    "2026-11-20T12:00Z",
    "p",
    {
      "hu": "Merkúr legnagyobb nyugati kitérése",
      "en": "Mercury greatest western elongation",
      "de": "Merkur größte westliche Elongation"
    },
    {
      "hu": "Hajnalban, napkelte előtt alacsonyan keleten kereshető — az év utolsó jó Merkúr-láthatósága.",
      "en": "Look low in the east before sunrise — the year’s last good Mercury appearance.",
      "de": "Morgens tief im Osten vor Sonnenaufgang — letzte gute Merkur-Sichtbarkeit des Jahres."
    }
  ],
  [
    "2026-12-14T20:00Z",
    "m",
    {
      "hu": "Geminidák meteorraj maximuma",
      "en": "Geminids meteor shower peak",
      "de": "Geminiden-Maximum"
    },
    {
      "hu": "Dec. 14/15 éjjel — az év egyik leglátványosabb hullócsillag-raja, akár 100+ meteor/óra ideális égen.",
      "en": "Night of Dec 14/15 — one of the year’s best showers, 100+ meteors/hour under ideal skies.",
      "de": "Nacht 14./15. Dez. — einer der besten Ströme des Jahres, 100+ Meteore/Std. unter Idealbedingungen."
    }
  ],
  [
    "2026-12-21T20:50Z",
    "s",
    {
      "hu": "Téli napforduló",
      "en": "Winter solstice",
      "de": "Wintersonnenwende"
    },
    {
      "hu": "21:50-kor (budapesti idő) — az év legrövidebb nappala, a csillagászati tél kezdete.",
      "en": "At 21:50 (Budapest time) — shortest day of the year, start of astronomical winter.",
      "de": "Um 21:50 (Budapester Zeit) — kürzester Tag, Beginn des astronomischen Winters."
    }
  ],
  [
    "2026-12-22T12:00Z",
    "m",
    {
      "hu": "Ursidák meteorraj",
      "en": "Ursids meteor shower",
      "de": "Ursiden"
    },
    {
      "hu": "Dec. 22/23 körüli gyenge, északi raj (Kis Medve), óránként 5–10 meteor.",
      "en": "Around Dec 22/23, a weak northern shower (Ursa Minor), 5–10 meteors/hour.",
      "de": "Um 22./23. Dez., schwacher nördlicher Strom (Kleiner Bär), 5–10 Meteore/Std."
    }
  ],
  [
    "2026-12-24T01:00Z",
    "l",
    {
      "hu": "Szuperhold — Hideghold",
      "en": "Supermoon — Cold Moon",
      "de": "Supermond — Kältemond"
    },
    {
      "hu": "Az év egyetlen „szuper” teliholdja: a Hold közel van földközelpontjához, kissé nagyobbnak és fényesebbnek látszik.",
      "en": "The year’s only “super” full moon: the Moon is near perigee, looking slightly larger and brighter.",
      "de": "Der einzige „Super“-Vollmond des Jahres: Mond nahe Perigäum, etwas größer und heller."
    }
  ],
  [
    "2027-01-03T12:00Z",
    "p",
    {
      "hu": "Vénusz legnagyobb nyugati kitérése",
      "en": "Venus greatest western elongation",
      "de": "Venus größte westliche Elongation"
    },
    {
      "hu": "A Hajnalcsillag 47°-ra a Naptól, hajnalban ragyog keleten.",
      "en": "The Morning Star 47° from the Sun, shining in the east at dawn.",
      "de": "Morgenstern 47° von der Sonne, leuchtet morgens im Osten."
    }
  ],
  [
    "2027-01-03T22:00Z",
    "m",
    {
      "hu": "Quadrantidák meteorraj",
      "en": "Quadrantids meteor shower",
      "de": "Quadrantiden"
    },
    {
      "hu": "Jan. 3/4 éjjel, rövid, de erős csúcs (akár 120/óra), szinte holdfénymentes égen.",
      "en": "Night of Jan 3/4, short but strong peak (up to 120/hour) under nearly moonless skies.",
      "de": "Nacht 3./4. Jan., kurzes starkes Maximum (bis 120/Std.) bei nahezu mondlosem Himmel."
    }
  ],
  [
    "2027-01-22T12:00Z",
    "l",
    {
      "hu": "Az év legnagyobb szuperholdja",
      "en": "Year’s largest supermoon",
      "de": "Größter Supermond des Jahres"
    },
    {
      "hu": "A 2027-es év legközelebbi teliholdja.",
      "en": "The closest full moon of 2027.",
      "de": "Der erdnächste Vollmond 2027."
    }
  ],
  [
    "2027-02-06T15:59Z",
    "e",
    {
      "hu": "Gyűrűs napfogyatkozás",
      "en": "Annular solar eclipse",
      "de": "Ringförmige Sonnenfinsternis"
    },
    {
      "hu": "Dél-Amerikából és Nyugat-Afrikából látható — Magyarországról NEM látszik.",
      "en": "Visible from South America and West Africa — NOT visible from Hungary.",
      "de": "Sichtbar aus Südamerika und Westafrika — aus Ungarn NICHT sichtbar."
    }
  ],
  [
    "2027-02-11T00:24Z",
    "p",
    {
      "hu": "Jupiter szembenállásban",
      "en": "Jupiter at opposition",
      "de": "Jupiter in Opposition"
    },
    {
      "hu": "Az Oroszlánban, −2,6 magnitúdóval egész éjjel látható — legjobb időszak távcsöves megfigyelésre.",
      "en": "In Leo at mag −2.6, up all night — best time for telescopic viewing.",
      "de": "Im Löwen, −2,6 mag, ganze Nacht sichtbar — beste Teleskopzeit."
    }
  ],
  [
    "2027-02-19T15:46Z",
    "p",
    {
      "hu": "Mars szembenállásban",
      "en": "Mars at opposition",
      "de": "Mars in Opposition"
    },
    {
      "hu": "Az Oroszlánban, −1,2 magnitúdó, egész éjjel látható; a Jupiter közelében. A legjobb Mars-láthatóság 2029-ig.",
      "en": "In Leo at mag −1.2, up all night near Jupiter. Best Mars view until 2029.",
      "de": "Im Löwen, −1,2 mag, ganze Nacht nahe Jupiter. Beste Mars-Sicht bis 2029."
    }
  ],
  [
    "2027-02-20T23:12Z",
    "e",
    {
      "hu": "Félárnyékos holdfogyatkozás",
      "en": "Penumbral lunar eclipse",
      "de": "Halbschatten-Mondfinsternis"
    },
    {
      "hu": "Feb. 21. 00:12 (budapesti idő) körül; Magyarországról is látható, de az elhalványulás szabad szemmel alig észrevehető.",
      "en": "Around 00:12 on 21 Feb (Budapest time); visible from Hungary, but the dimming is hard to notice naked-eye.",
      "de": "Um 00:12 am 21. Feb. (Budapester Zeit); aus Ungarn sichtbar, Abdunkelung kaum mit bloßem Auge."
    }
  ],
  [
    "2027-02-22T18:00Z",
    "p",
    {
      "hu": "Bolygóparádé",
      "en": "Planet parade",
      "de": "Planetenparade"
    },
    {
      "hu": "Mars, Jupiter, Szaturnusz, Uránusz és Neptunusz egyszerre az esti égen (ebből három szabad szemmel).",
      "en": "Mars, Jupiter, Saturn, Uranus and Neptune share the evening sky (three naked-eye).",
      "de": "Mars, Jupiter, Saturn, Uranus und Neptun am Abendhimmel (drei mit bloßem Auge)."
    }
  ],
  [
    "2027-03-20T12:00Z",
    "s",
    {
      "hu": "Tavaszi napéjegyenlőség",
      "en": "March equinox",
      "de": "Frühlings-Tagundnachtgleiche"
    },
    {
      "hu": "Március 20. — a csillagászati tavasz kezdete, a nappal és az éjszaka közel egyenlő hosszú.",
      "en": "20 March — start of astronomical spring; day and night nearly equal.",
      "de": "20. März — Beginn des astronomischen Frühlings; Tag und Nacht nahezu gleich."
    }
  ],
  [
    "2027-04-22T12:00Z",
    "m",
    {
      "hu": "Lyridák meteorraj",
      "en": "Lyrids meteor shower",
      "de": "Lyriden"
    },
    {
      "hu": "Ápr. 22/23 körül, óránként 10–20 meteor, a Lant csillagkép irányából.",
      "en": "Around 22/23 Apr, 10–20 meteors/hour from Lyra.",
      "de": "Um 22./23. Apr., 10–20 Meteore/Std. aus der Leier."
    }
  ],
  [
    "2027-05-06T02:00Z",
    "m",
    {
      "hu": "Éta Aquaridák meteorraj",
      "en": "Eta Aquariids meteor shower",
      "de": "Eta-Aquariiden"
    },
    {
      "hu": "Május 5/6 hajnalán; a Halley-üstökös porából. Hazánkból hajnalban, alacsonyan látható.",
      "en": "Dawn of May 5/6; dust from Halley’s Comet. From Hungary: low in the dawn sky.",
      "de": "Morgendämmerung 5./6. Mai; Staub von Halleys Komet. Aus Ungarn tief am Morgenhimmel."
    }
  ],
  [
    "2027-05-07T18:44Z",
    "p",
    {
      "hu": "Vénusz–Szaturnusz együttállás",
      "en": "Venus–Saturn conjunction",
      "de": "Venus–Saturn-Konjunktion"
    },
    {
      "hu": "Hajnalban, 36′ távolságra egymástól a keleti égen.",
      "en": "At dawn, 36′ apart in the eastern sky.",
      "de": "Morgens, 36′ Abstand am Osthimmel."
    }
  ],
  [
    "2027-06-21T12:00Z",
    "s",
    {
      "hu": "Nyári napforduló",
      "en": "Summer solstice",
      "de": "Sommersonnenwende"
    },
    {
      "hu": "Június 21. — az év leghosszabb nappala, a csillagászati nyár kezdete.",
      "en": "21 June — longest day, start of astronomical summer.",
      "de": "21. Juni — längster Tag, Beginn des astronomischen Sommers."
    }
  ],
  [
    "2027-07-18T16:02Z",
    "e",
    {
      "hu": "Félárnyékos holdfogyatkozás",
      "en": "Penumbral lunar eclipse",
      "de": "Halbschatten-Mondfinsternis"
    },
    {
      "hu": "Magyarországról gyakorlatilag nem figyelhető meg (a Hold a fogyatkozás idején még a horizont alatt van).",
      "en": "Practically not observable from Hungary (Moon still below the horizon during the eclipse).",
      "de": "Aus Ungarn praktisch nicht beobachtbar (Mond noch unter dem Horizont)."
    }
  ],
  [
    "2027-08-02T10:06Z",
    "e",
    {
      "hu": "Teljes napfogyatkozás (hazánkból részleges)",
      "en": "Total solar eclipse (partial from Hungary)",
      "de": "Totale Sonnenfinsternis (partiell aus Ungarn)"
    },
    {
      "hu": "A teljesség sávja Spanyolországon, Észak-Afrikán és Egyiptomon át húzódik; Magyarországról délelőtt részleges fogyatkozás látszik. Csak napszűrővel nézd!",
      "en": "Path of totality crosses Spain, North Africa and Egypt; from Hungary a morning partial eclipse. Use a solar filter!",
      "de": "Totalitätszone über Spanien, Nordafrika und Ägypten; aus Ungarn vormittags partiell. Nur mit Sonnenfilter!"
    }
  ],
  [
    "2027-08-12T20:00Z",
    "m",
    {
      "hu": "Perseidák meteorraj",
      "en": "Perseids meteor shower",
      "de": "Perseiden"
    },
    {
      "hu": "Aug. 12/13 éjjel — a nyár legnépszerűbb hullócsillag-raja, akár 60–100 meteor/óra.",
      "en": "Night of Aug 12/13 — the summer’s most popular shower, 60–100 meteors/hour.",
      "de": "Nacht 12./13. Aug. — beliebtester Sommerstrom, 60–100 Meteore/Std."
    }
  ],
  [
    "2027-08-17T07:13Z",
    "e",
    {
      "hu": "Félárnyékos holdfogyatkozás",
      "en": "Penumbral lunar eclipse",
      "de": "Halbschatten-Mondfinsternis"
    },
    {
      "hu": "Magyarországról nem látható (a Hold ekkor már lenyugodott).",
      "en": "Not visible from Hungary (Moon already set).",
      "de": "Aus Ungarn nicht sichtbar (Mond bereits untergegangen)."
    }
  ],
  [
    "2027-09-23T12:00Z",
    "s",
    {
      "hu": "Őszi napéjegyenlőség",
      "en": "September equinox",
      "de": "Herbst-Tagundnachtgleiche"
    },
    {
      "hu": "Szeptember 23. — a csillagászati ősz kezdete.",
      "en": "23 September — start of astronomical autumn.",
      "de": "23. September — Beginn des astronomischen Herbstes."
    }
  ],
  [
    "2027-10-08T18:00Z",
    "m",
    {
      "hu": "Draconidák meteorraj",
      "en": "Draconids meteor shower",
      "de": "Draconiden"
    },
    {
      "hu": "Okt. 8/9 este, a Sárkány csillagképből; általában gyenge, néha meglepetésszerű kitöréssel.",
      "en": "Evening of Oct 8/9 from Draco; usually weak, occasionally outbursting.",
      "de": "Abend 8./9. Okt. aus dem Drachen; meist schwach, gelegentlich Ausbrüche."
    }
  ],
  [
    "2027-10-18T00:27Z",
    "p",
    {
      "hu": "Szaturnusz szembenállásban",
      "en": "Saturn at opposition",
      "de": "Saturn in Opposition"
    },
    {
      "hu": "Egész éjjel látható, a gyűrűk távcsővel szépen megfigyelhetők.",
      "en": "Up all night; rings look fine in a telescope.",
      "de": "Ganze Nacht sichtbar; Ringe im Teleskop gut zu sehen."
    }
  ],
  [
    "2027-10-21T22:00Z",
    "m",
    {
      "hu": "Orionidák meteorraj",
      "en": "Orionids meteor shower",
      "de": "Orioniden"
    },
    {
      "hu": "Okt. 21/22 körül, a Halley-üstökös másik meteorraja, óránként kb. 20 meteor.",
      "en": "Around Oct 21/22, Halley’s other shower, ~20 meteors/hour.",
      "de": "Um 21./22. Okt., anderer Halley-Strom, ~20 Meteore/Std."
    }
  ]
];

const LANG_STORAGE_KEY = 'holdnaptar.lang.v1';
const LANG_OFFER_DISMISS_KEY = 'holdnaptar.langOfferDismissed.v1';
let LANG = 'hu';

function tt(obj){
  if(obj==null) return '';
  if(typeof obj === 'string') return obj;
  return obj[LANG] || obj.en || obj.hu || Object.values(obj)[0] || '';
}
function t(key){
  const pack = UI[LANG] || UI.hu;
  if(key in pack) return pack[key];
  if(UI.en && key in UI.en) return UI.en[key];
  if(UI.hu && key in UI.hu) return UI.hu[key];
  return key;
}
function tList(key){
  const v = t(key);
  return Array.isArray(v) ? v : [];
}
function localeTag(){ return (LANG_META[LANG]||LANG_META.hu).locale; }
function moonNameLocal(key){
  const m = MOON_I18N[key];
  return m ? tt(m.name) : key;
}
function buildGlossary(){
  const g = {};
  for(const [key, entry] of Object.entries(GLOSSARY_I18N)){
    const item = {
      title: tt(entry.title),
      text: tt(entry.text),
      aliases: GLOSSARY_ALIASES[key] || []
    };
    if(entry.wiki){
      const w = entry.wiki[LANG] || entry.wiki.en || entry.wiki.hu;
      if(w) item.wiki = {url:w.url, lang:w.lang, label:w.label};
    }
    g[key] = item;
  }
  return g;
}
function suggestLangFromCountry(cc){
  if(!cc) return null;
  return COUNTRY_LANG[String(cc).toUpperCase()] || null;
}
function suggestLangFromNavigator(){
  const nav = (navigator.language||'hu').slice(0,2).toLowerCase();
  return LANG_META[nav] ? nav : null;
}
function loadSavedLang(){
  try{ const v=localStorage.getItem(LANG_STORAGE_KEY); if(v && LANG_META[v]) return v; }catch(_){}
  return null;
}
function saveLang(code){
  try{ localStorage.setItem(LANG_STORAGE_KEY, code); }catch(_){}
}
function loadOfferDismissed(){
  try{ return JSON.parse(localStorage.getItem(LANG_OFFER_DISMISS_KEY)||'{}')||{}; }catch(_){ return {}; }
}
function dismissOffer(code){
  const o=loadOfferDismissed(); o[code]=1;
  try{ localStorage.setItem(LANG_OFFER_DISMISS_KEY, JSON.stringify(o)); }catch(_){}
}

function tf(key, vars){
  let s=t(key);
  if(vars) for(const [k,v] of Object.entries(vars)) s=s.replaceAll('{'+k+'}', String(v));
  return s;
}
