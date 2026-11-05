/**
 * Chỗ trống để cắm đối tác hỗ trợ chuyên môn ở giai đoạn sau.
 * Khi có đối tác đã được thẩm định, điền thông tin vào đây. Nếu null,
 * giao diện chỉ hiển thị gợi ý trò chuyện với người lớn đáng tin và số 111.
 */
export interface SupportPartner {
  name: string;
  description: string;
  href: string;
  phone?: string;
  availability?: string;
}

export const supportPartner: SupportPartner | null = null;

export const CHILD_HELPLINE = "111";
