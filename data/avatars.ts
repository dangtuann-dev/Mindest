import type { ArchetypeCode } from "./archetypes";

export interface AvatarOptions {
  hair: string[];
  hairColor: string[];
  skinColor: string[];
  eyes: string[];
  mouth: string[];
  eyebrows: string[];
  head: string[];
  nose: string[];
  glasses?: string[];
  glassesProbability?: number;
  earrings?: string[];
  earringsProbability?: number;
  frecklesProbability?: number;
  hairAccessories?: string[];
  hairAccessoriesProbability?: number;
  beardProbability?: number;
}

export interface AvatarConfig {
  seed: string;
  backgroundColor: string;
  options: AvatarOptions;
}

/**
 * Cấu hình cố định cho 16 nhân vật. Phong cách Lorelei của Lisa Wischofsky
 * (DiceBear), giấy phép CC0 1.0. Avatar được sinh cục bộ, không gọi mạng.
 */
export const AVATARS: Record<ArchetypeCode, AvatarConfig> = {
  EFDV: {
    seed: "song-mang",
    backgroundColor: "fcf2ed",
    options: {
      hair: ["variant10"],
      hairColor: ["2f2a26"],
      skinColor: ["f2d3b8"],
      eyes: ["variant03"],
      mouth: ["sad04"],
      eyebrows: ["variant05"],
      head: ["variant01"],
      nose: ["variant02"],
      frecklesProbability: 40,
      beardProbability: 0,
      earringsProbability: 0,
      glassesProbability: 0,
    },
  },
  EFDA: {
    seed: "chiec-loa",
    backgroundColor: "f9e7e2",
    options: {
      hair: ["variant24"],
      hairColor: ["4a3123"],
      skinColor: ["eec3a0"],
      eyes: ["variant10"],
      mouth: ["happy16"],
      eyebrows: ["variant03"],
      head: ["variant02"],
      nose: ["variant01"],
      glasses: ["variant02"],
      glassesProbability: 100,
      beardProbability: 0,
      earringsProbability: 0,
    },
  },
  EFRV: {
    seed: "noi-loan",
    backgroundColor: "fdf1e5",
    options: {
      hair: ["variant33"],
      hairColor: ["1b1a18"],
      skinColor: ["d9a06b"],
      eyes: ["variant08"],
      mouth: ["sad05"],
      eyebrows: ["variant07"],
      head: ["variant03"],
      nose: ["variant04"],
      beardProbability: 0,
      earringsProbability: 0,
      glassesProbability: 0,
    },
  },
  EFRA: {
    seed: "nui-lua",
    backgroundColor: "f5e3dd",
    options: {
      hair: ["variant41"],
      hairColor: ["3d2b1f"],
      skinColor: ["f6ddc4"],
      eyes: ["variant04"],
      mouth: ["happy17"],
      eyebrows: ["variant09"],
      head: ["variant01"],
      nose: ["variant05"],
      beardProbability: 0,
      earringsProbability: 0,
      glassesProbability: 0,
    },
  },
  ESDV: {
    seed: "tham-hiem",
    backgroundColor: "fdf6e4",
    options: {
      hair: ["variant16"],
      hairColor: ["6b4a2f"],
      skinColor: ["f2d3b8"],
      eyes: ["variant09"],
      mouth: ["happy06"],
      eyebrows: ["variant02"],
      head: ["variant04"],
      nose: ["variant03"],
      frecklesProbability: 30,
      beardProbability: 0,
      earringsProbability: 0,
      glassesProbability: 0,
    },
  },
  ESDA: {
    seed: "ngoi-sao",
    backgroundColor: "faf0dc",
    options: {
      hair: ["variant28"],
      hairColor: ["4a3123"],
      skinColor: ["e8b98f"],
      eyes: ["variant13"],
      mouth: ["happy04"],
      eyebrows: ["variant04"],
      head: ["variant02"],
      nose: ["variant02"],
      earrings: ["variant02"],
      earringsProbability: 40,
      beardProbability: 0,
      glassesProbability: 0,
    },
  },
  ESRV: {
    seed: "van-dong",
    backgroundColor: "f7efdd",
    options: {
      hair: ["variant06"],
      hairColor: ["1b1a18"],
      skinColor: ["c98d5f"],
      eyes: ["variant15"],
      mouth: ["happy08"],
      eyebrows: ["variant06"],
      head: ["variant03"],
      nose: ["variant06"],
      beardProbability: 0,
      earringsProbability: 0,
      glassesProbability: 0,
    },
  },
  ESRA: {
    seed: "guc-san",
    backgroundColor: "f1e9d9",
    options: {
      hair: ["variant12"],
      hairColor: ["2f2a26"],
      skinColor: ["d9a06b"],
      eyes: ["variant01"],
      mouth: ["sad01"],
      eyebrows: ["variant11"],
      head: ["variant04"],
      nose: ["variant01"],
      beardProbability: 0,
      earringsProbability: 0,
      glassesProbability: 0,
    },
  },
  IFDV: {
    seed: "thu-khong-gui",
    backgroundColor: "f0f5ee",
    options: {
      hair: ["variant21"],
      hairColor: ["3d2b1f"],
      skinColor: ["f6ddc4"],
      eyes: ["variant13"],
      mouth: ["sad03"],
      eyebrows: ["variant08"],
      head: ["variant01"],
      nose: ["variant03"],
      glasses: ["variant04"],
      glassesProbability: 100,
      beardProbability: 0,
      earringsProbability: 0,
    },
  },
  IFDA: {
    seed: "gac-den",
    backgroundColor: "eaf0ea",
    options: {
      hair: ["variant37"],
      hairColor: ["1b1a18"],
      skinColor: ["eec3a0"],
      eyes: ["variant19"],
      mouth: ["sad04"],
      eyebrows: ["variant10"],
      head: ["variant02"],
      nose: ["variant05"],
      earrings: ["variant01"],
      earringsProbability: 30,
      beardProbability: 0,
      glassesProbability: 0,
    },
  },
  IFRV: {
    seed: "giu-lua",
    backgroundColor: "f1f6ee",
    options: {
      hair: ["variant44"],
      hairColor: ["6b4a2f"],
      skinColor: ["e8b98f"],
      eyes: ["variant18"],
      mouth: ["happy05"],
      eyebrows: ["variant01"],
      head: ["variant03"],
      nose: ["variant02"],
      hairAccessories: ["flowers"],
      hairAccessoriesProbability: 100,
      beardProbability: 0,
      earringsProbability: 0,
      glassesProbability: 0,
    },
  },
  IFRA: {
    seed: "chiec-bong",
    backgroundColor: "e9efe7",
    options: {
      hair: ["variant47"],
      hairColor: ["2f2a26"],
      skinColor: ["b97a4f"],
      eyes: ["variant01"],
      mouth: ["sad02"],
      eyebrows: ["variant12"],
      head: ["variant04"],
      nose: ["variant04"],
      beardProbability: 0,
      earringsProbability: 0,
      glassesProbability: 0,
    },
  },
  ISDV: {
    seed: "kien-truc",
    backgroundColor: "edf4f2",
    options: {
      hair: ["variant14"],
      hairColor: ["4a3123"],
      skinColor: ["f2d3b8"],
      eyes: ["variant08"],
      mouth: ["happy13"],
      eyebrows: ["variant05"],
      head: ["variant01"],
      nose: ["variant06"],
      glasses: ["variant01"],
      glassesProbability: 100,
      beardProbability: 0,
      earringsProbability: 0,
    },
  },
  ISDA: {
    seed: "lu-khach",
    backgroundColor: "e9f1f0",
    options: {
      hair: ["variant31"],
      hairColor: ["1b1a18"],
      skinColor: ["d9a06b"],
      eyes: ["variant19"],
      mouth: ["sad06"],
      eyebrows: ["variant09"],
      head: ["variant02"],
      nose: ["variant01"],
      frecklesProbability: 25,
      beardProbability: 0,
      earringsProbability: 0,
      glassesProbability: 0,
    },
  },
  ISRV: {
    seed: "hoc-gia",
    backgroundColor: "eff5f4",
    options: {
      hair: ["variant26"],
      hairColor: ["3d2b1f"],
      skinColor: ["f6ddc4"],
      eyes: ["variant14"],
      mouth: ["happy03"],
      eyebrows: ["variant03"],
      head: ["variant03"],
      nose: ["variant03"],
      glasses: ["variant03"],
      glassesProbability: 100,
      beardProbability: 0,
      earringsProbability: 0,
    },
  },
  ISRA: {
    seed: "kiet-suc",
    backgroundColor: "e7efed",
    options: {
      hair: ["variant39"],
      hairColor: ["2f2a26"],
      skinColor: ["c98d5f"],
      eyes: ["variant01"],
      mouth: ["sad09"],
      eyebrows: ["variant13"],
      head: ["variant04"],
      nose: ["variant05"],
      beardProbability: 0,
      earringsProbability: 0,
      glassesProbability: 0,
    },
  },
};

export const AVATAR_LICENSE = {
  style: "Lorelei",
  creator: "Lisa Wischofsky",
  license: "CC0 1.0",
  licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  source: "https://www.dicebear.com/styles/lorelei/",
} as const;
