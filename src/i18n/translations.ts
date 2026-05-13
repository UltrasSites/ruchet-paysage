import type { Lang } from './utils';

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface GalleryImage {
  label: string;
  alt: string;
  src: string;
}

// Photos paysagisme libres (Pexels), à remplacer plus tard par les vraies photos client Ruchet
const gallerySrcs = [
  "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2728269/pexels-photo-2728269.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7728721/pexels-photo-7728721.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4505464/pexels-photo-4505464.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

const servicesData: ServiceItem[] = [
  { title: "Création paysagère", desc: "Conception et création complète de votre extérieur : massifs, allées, terrasses, espaces verts. Un projet pensé pour durer, adapté à votre terrain et à votre style de vie." },
  { title: "Tonte & entretien", desc: "Tonte régulière, fauchage, débroussaillage. Un jardin toujours net, géré au rythme des saisons, dans le respect de votre temps." },
  { title: "Taille & élagage", desc: "Taille des haies, arbustes et arbres fruitiers. Coupes raisonnées pour favoriser la santé et la croissance de vos végétaux." },
  { title: "Désherbage & plantation", desc: "Désherbage manuel ou raisonné, choix et mise en place de plantes adaptées au sol et au climat de Corbeyrier." },
  { title: "Nettoyage extérieur", desc: "Terrasses bois, béton, pierres naturelles, carrelage extérieur — nettoyage et entretien pour leur redonner tout leur éclat." },
  { title: "Déneigement", desc: "Service hivernal manuel (pelle, racleur, sel, gravillons) ou mécanique (souffleuse, saleuse). Vos accès dégagés, en toute sécurité." },
];

const galleryLabels: Omit<GalleryImage, 'src'>[] = [
  { label: "Création de jardin", alt: "Jardin paysager fleuri avec massifs" },
  { label: "Aménagement extérieur", alt: "Terrasse en bois entourée de plantes" },
  { label: "Taille des haies", alt: "Haie taillée avec précision" },
  { label: "Entretien des arbres", alt: "Élagueur taillant un arbre" },
  { label: "Tonte de pelouse", alt: "Pelouse fraîchement tondue" },
  { label: "Pose de plantes", alt: "Mains plantant une jeune pousse" },
];

export function getServices(_lang: Lang): ServiceItem[] {
  return servicesData;
}

export function getGallery(_lang: Lang): GalleryImage[] {
  return gallerySrcs.map((src, i) => ({ ...galleryLabels[i], src }));
}

export interface TranslationsType {
  hero_badge: string;
  hero_title1: string;
  hero_title2: string;
  hero_lead: string;
  hero_demo: string;
  hero_cta_quote: string;
  hero_cta_services: string;
  hero_footer_note: string;
  section_entreprise_label: string;
  section_entreprise_title1: string;
  section_entreprise_title2: string;
  section_entreprise_p1: string;
  section_entreprise_p2: string;
  section_entreprise_p3: string;
  section_services_label: string;
  section_services_title: string;
  section_galerie_label: string;
  section_galerie_title: string;
  section_galerie_lead: string;
  section_galerie_cta: string;
  section_methode_label: string;
  section_methode_title: string;
  methode_1_title: string;
  methode_1_desc: string;
  methode_2_title: string;
  methode_2_desc: string;
  methode_3_title: string;
  methode_3_desc: string;
  methode_4_title: string;
  methode_4_desc: string;
  contact_label: string;
  contact_title1: string;
  contact_title2: string;
  contact_lead: string;
  contact_demo_note: string;
  contact_ultras_cta: string;
  form_title: string;
  form_name: string;
  form_city: string;
  form_email: string;
  form_phone: string;
  form_message: string;
  form_submit: string;
  plan_label: string;
  plan_title: string;
  plan_p: string;
  plan_note: string;
  nav_about: string;
  nav_services: string;
  nav_galerie: string;
  nav_contact: string;
  nav_cta_contact: string;
  nav_cta_devis: string;
  nav_brand_sub: string;
  footer_brand: string;
  footer_copyright: string;
  drawer_theme: string;
  drawer_cta: string;
  aria_menu: string;
  drawer_swipe_hint: string;
}

const fr: TranslationsType = {
  hero_badge: 'Paysagiste · Corbeyrier · Vaud',
  hero_title1: 'Valorisation',
  hero_title2: 'de vos extérieurs.',
  hero_lead: "Création, entretien, taille, nettoyage et déneigement — un travail soigné, fiable et durable. Julien Ruchet, paysagiste indépendant à Corbeyrier, Suisse.",
  hero_demo: '',
  hero_cta_quote: 'Demander un devis',
  hero_cta_services: 'Mes prestations',
  hero_footer_note: 'Devis gratuit · Intervention canton de Vaud',
  section_entreprise_label: 'À propos',
  section_entreprise_title1: "L'excellence au service",
  section_entreprise_title2: 'de vos extérieurs.',
  section_entreprise_p1: "Jeune entrepreneur passionné, Julien Ruchet met 5 ans d'expérience au service de vos espaces verts. Un travail soigné, fiable et pensé pour durer.",
  section_entreprise_p2: "Ruchet Paysage intervient pour les particuliers et les propriétés du canton de Vaud : création, entretien, taille, nettoyage, déneigement.",
  section_entreprise_p3: '— Julien Ruchet, paysagiste à Corbeyrier',
  section_services_label: 'Savoir-faire',
  section_services_title: 'Mes prestations',
  section_galerie_label: 'Réalisations',
  section_galerie_title: 'Mes chantiers',
  section_galerie_lead: "Quelques exemples de réalisations : créations de jardins, tailles, entretien et aménagements extérieurs.",
  section_galerie_cta: 'Demander un devis',
  section_methode_label: 'Processus',
  section_methode_title: 'Ma méthode',
  methode_1_title: 'Visite & écoute',
  methode_1_desc: 'Je viens sur place comprendre votre terrain, vos envies, vos contraintes.',
  methode_2_title: 'Devis détaillé',
  methode_2_desc: 'Un devis clair, sans surprise, avec un planning réaliste.',
  methode_3_title: 'Exécution soignée',
  methode_3_desc: 'Travail propre, respectueux du voisinage et du végétal.',
  methode_4_title: 'Suivi',
  methode_4_desc: 'Conseil après chantier, entretien régulier si vous le souhaitez.',
  contact_label: 'Contact',
  contact_title1: 'Parlons',
  contact_title2: 'de votre projet.',
  contact_lead: "Un devis ? Une question ? Un projet de jardin ? Écrivez-moi ou appelez-moi directement — je vous réponds rapidement.",
  contact_demo_note: 'Site réalisé par',
  contact_ultras_cta: 'ultras-sites.com',
  form_title: 'Demande de devis',
  form_name: 'Nom complet',
  form_city: 'Localité',
  form_email: 'Email',
  form_phone: 'Téléphone',
  form_message: 'Décrivez votre projet (création, taille, entretien, déneigement...)',
  form_submit: 'Envoyer ma demande',
  plan_label: 'Localisation',
  plan_title: 'Basé à Corbeyrier, Vaud.',
  plan_p: "Intervention dans tout le canton de Vaud :",
  plan_note: "Aigle, Yvorne, Villeneuve, Montreux, Vevey, Lausanne et alentours — sur devis selon distance.",
  nav_about: 'À propos',
  nav_services: 'Prestations',
  nav_galerie: 'Réalisations',
  nav_contact: 'Contact',
  nav_cta_contact: 'Contact',
  nav_cta_devis: 'Devis',
  nav_brand_sub: 'Paysagisme · Déneigement · Nettoyage',
  footer_brand: 'Ruchet Paysage',
  footer_copyright: '© Ruchet Paysage ·',
  drawer_theme: 'Changer le thème',
  drawer_cta: 'Demander un devis',
  aria_menu: 'Ouvrir le menu',
  drawer_swipe_hint: 'Glissez vers le bas pour fermer',
};

export const translations: Record<Lang, TranslationsType> = { fr };
