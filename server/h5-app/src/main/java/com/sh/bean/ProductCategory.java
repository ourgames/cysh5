package com.sh.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class ProductCategory {
	int category_no;
	String category_name;
	@JsonIgnore
	String category_type;
	int sex_limit;

	public int getCategory_no() {
		return category_no;
	}

	public void setCategory_no(int category_no) {
		this.category_no = category_no;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	public String getCategory_type() {
		return category_type;
	}

	public void setCategory_type(String category_type) {
		this.category_type = category_type;
	}

	public int getSex_limit() {
		return sex_limit;
	}

	public void setSex_limit(int sex_limit) {
		this.sex_limit = sex_limit;
	}

}
