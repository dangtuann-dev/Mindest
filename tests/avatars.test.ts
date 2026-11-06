import { describe, expect, it } from "vitest";
import { ARCHETYPES } from "@/data/archetypes";
import { AVATAR_GENDER_OVERRIDES, type AvatarGender } from "@/data/avatars";
import { getAvatarSvg } from "@/lib/avatar";

const GENDERS: readonly AvatarGender[] = ["nam", "nu"];

describe("avatar theo giới tính", () => {
  it("có đủ 16 bộ nam và 16 bộ nữ", () => {
    for (const gender of GENDERS) {
      expect(Object.keys(AVATAR_GENDER_OVERRIDES[gender])).toHaveLength(16);
    }
  });

  it("mỗi nhân cách có kiểu tóc riêng cho nam và nữ", () => {
    for (const archetype of ARCHETYPES) {
      for (const gender of GENDERS) {
        const hair = AVATAR_GENDER_OVERRIDES[gender][archetype.code].hair;
        expect(hair, `${archetype.code} ${gender}`).toBeDefined();
        expect(hair!.length).toBe(1);
      }
    }
  });

  it("16 avatar nam dùng 16 kiểu tóc khác nhau", () => {
    const hairs = ARCHETYPES.map(
      (archetype) => AVATAR_GENDER_OVERRIDES.nam[archetype.code].hair![0],
    );
    expect(new Set(hairs).size).toBe(16);
  });

  it("16 avatar nữ dùng 16 kiểu tóc khác nhau", () => {
    const hairs = ARCHETYPES.map(
      (archetype) => AVATAR_GENDER_OVERRIDES.nu[archetype.code].hair![0],
    );
    expect(new Set(hairs).size).toBe(16);
  });

  it("avatar nam và nữ của cùng nhân cách khác nhau", () => {
    for (const archetype of ARCHETYPES) {
      const nam = getAvatarSvg(archetype.code, "nam");
      const nu = getAvatarSvg(archetype.code, "nu");
      const khac = getAvatarSvg(archetype.code, "khac");
      expect(nam, archetype.code).not.toBe(nu);
      expect(nam, archetype.code).not.toBe(khac);
      expect(nu, archetype.code).not.toBe(khac);
    }
  });

  it("avatar nam tắt phụ kiện của bộ gốc", () => {
    expect(AVATAR_GENDER_OVERRIDES.nam.IFRV.hairAccessoriesProbability).toBe(0);
    expect(AVATAR_GENDER_OVERRIDES.nam.ESDA.earringsProbability).toBe(0);
    expect(AVATAR_GENDER_OVERRIDES.nam.IFDA.earringsProbability).toBe(0);
  });
});
