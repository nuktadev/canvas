export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export interface ICategory {
  _id: string;
  title: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ICourse {
  _id: string;
  title: string;
  author: string;
  membership_type: string;
  sub_category_id: {
    _id: string;
    title: string;
    category_id: {
      _id: string;
      title: string;
      id: string;
    };
    id: string;
  };
  category_id: string;
  description: string;
  banner: string;
  syllabus: string;
  routine: string;
}

export interface IBook {
  _id: string;
  title: string;
  writer: string;
  price: number;
  discount_price: number;
  cover_page: string;
  format: string;
  sample_pdf_link: string;
  pdf_link: string;
  category_id: string[];
  sub_category_id: string[];
  course_id: {
    _id: string;
    title: string;
    membership_type: string;
    sub_category_id: {
      _id: string;
      title: string;
      category_id: {
        _id: string;
        title: string;
        id: string;
      };
      id: string;
    };
    id: string;
  }[];
  subject_id: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
