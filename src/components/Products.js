import React, { Component } from "react";
import { Link } from "react-router-dom";
import formatCurrency from "../utils/util";

import Modal from "react-modal";

import Zoom from "react-reveal/Zoom";

class Products extends Component {
  // Product Modal
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  //Open the Modal
  openModal = (product) => {
    this.setState({ product });
  };

  //Close the Modal
  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const productTitles = "Products";
    const { product } = this.state;
    return (
      <section className="all_products">
        <div className="container">
          <h1 className="text-info">{productTitles}</h1> <hr /> <br />
          <div className="row">
            {this.props.products.map((product) => (
              <Zoom>
                <div className="col-md-4">
                  <div className="card" key={product.id}>
                    <Link
                      to={"#" + product.id}
                      onClick={() => this.openModal(product)}
                    >
                      <img
                        className="card-img-top"
                        src={product.image}
                        alt={product.title}
                      />
                    </Link>

                    <div className="card-body">
                      <h4 className="card-title">
                        {product.title} &nbsp;
                        {/* <span className="text-muted"></span> */}
                        &nbsp;
                        {/* <b className="text-danger">${product.price}</b> */}
                      </h4>
                      <hr />
                      <p className="card-text">{product.description}</p>
                      <button className="disabled btn btn-secondary btn-lg mr-2 font-weight-bold">
                        {formatCurrency(product.price)}
                      </button>

                      <Link
                        to={"#" + product.id}
                        className="btn btn-outline-warning btn-lg font-weight-bold"
                        onClick={() => this.props.addToCart(product)}
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </Zoom>
            ))}

            {/* Start of Modal */}
            {product && (
              <Modal isOpen={true} onRequestClose={this.closeModal}>
                <Zoom>
                  <button className="btn btn-danger" onClick={this.closeModal}>
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                  <div className="product-details">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            className="img-thumbnail img-responsive"
                            src={product.image}
                            alt={product.title}
                            title={product.title}
                          ></img>
                        </div>

                        <div className="col-md-6">
                          <h1>{product.title}</h1>
                          <p>{product.description}</p>
                          <h3 className="mr-3">
                            Avaiable Sizes:
                            {product.availableSizes.map((closeTheModal) => (
                              <span>
                                <button
                                  className="btn btn-dark ml-2 mr-2"
                                  disabled
                                >
                                  {closeTheModal}
                                </button>
                              </span>
                            ))}
                          </h3>

                          <h1 className="text-dark">
                            Price: &nbsp;
                            <span className="text-danger">
                              {formatCurrency(product.price)}
                            </span>
                          </h1>
                          <button
                            className="btn btn-outline-warning btn-lg font-weight-bold"
                            onClick={() => {
                              this.props.addToCart(product);
                              this.closeModal();
                            }}
                          >
                            Add To Cart
                          </button>
                        </div>

                        {/* <div className="product-details-description">
                      

                    
                      <div className="product-price">
                       
                       
                      </div>
                    </div> */}
                      </div>
                    </div>
                  </div>
                </Zoom>
              </Modal>
            )}
            {/* End of Modal */}
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
