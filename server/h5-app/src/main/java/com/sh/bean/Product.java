package com.sh.bean;

import java.sql.Timestamp;

import javax.validation.constraints.Size;

public class Product {
	Long product_no;
	int publisher;
	@Size(min = 0, max = 1, message = "状态值只能在0-1之间")
	int product_status;
	@Size(min = 3, max = 20, message = "标题长度只能在3-20之间")
	String title;
	String description;
	String location;
	Timestamp publish_time;
	Timestamp valid_time;
	int visit;
	int category;
	int price;
	int flag;
	int product_weight;
	int sex_flag;
	String pic;

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getPublisher() {
		return publisher;
	}

	public void setPublisher(int publisher) {
		this.publisher = publisher;
	}

	public int getProduct_status() {
		return product_status;
	}

	public void setProduct_status(int product_status) {
		this.product_status = product_status;
	}

	public Timestamp getPublish_time() {
		return publish_time;
	}

	public void setPublish_time(Timestamp publish_time) {
		this.publish_time = publish_time;
	}

	public Timestamp getValid_time() {
		return valid_time;
	}

	public void setValid_time(Timestamp valid_time) {
		this.valid_time = valid_time;
	}

	public int getCategory() {
		return category;
	}

	public void setCategory(int category) {
		this.category = category;
	}

	public int getProduct_weight() {
		return product_weight;
	}

	public void setProduct_weight(int product_weight) {
		this.product_weight = product_weight;
	}

	public int getSex_flag() {
		return sex_flag;
	}

	public void setSex_flag(int sex_flag) {
		this.sex_flag = sex_flag;
	}

	public String getPic() {
		return pic;
	}

	public void setPic(String pic) {
		this.pic = pic;
	}

	public Long getProduct_no() {
		return product_no;
	}

	public void setProduct_no(Long product_no) {
		this.product_no = product_no;
	}

	public int getVisit() {
		return visit;
	}

	public void setVisit(int visit) {
		this.visit = visit;
	}

}
