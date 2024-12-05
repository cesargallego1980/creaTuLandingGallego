
export const Footer = () => {
    return(
        <>
        <footer class="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
            <div class="row text-center text-md-left">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>
                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti reiciendis illum! Quae qui, earum odio explicabo quisquam tempora hic ea aliquid quis ad. Ducimus ab ut tempora placeat consequuntur!</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
                    <p>
                        <a href="#" className="text-white" style="text-decoration: none;">The Providers</a>
                    </p>
                    <p>
                        <a href="#" className="text-white" style="text-decoration: none;">Creativity</a>
                    </p>
                    <p>
                        <a href="#" className="text-white" style="text-decoration: none;">SourceFiles</a>
                    </p>
                    <p>
                        <a href="#" className="text-white" style="text-decoration: none;">Bootstrap 5 Alpha</a>
                    </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
                    <p>
                        <a href="#" className="text-white" style="text-decoration: none;">Your Account</a>
                    </p>
                    <p>
                        <a href="#" className="text-white" style="text-decoration: none;">Become an Affiliates</a>
                    </p>
                    <p>
                        <a href="#" className="text-white" style="text-decoration: none;">Shipping Rates</a>
                    </p>
                    <p>
                        <a href="#" className="text-white" style="text-decoration: none;">Help</a>
                    </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contacto</h5>
                    <p>
                        <i className="fa-solid fa-house mr-4" style="color: #f7f7f7;"></i>New York, NY 2333, US
                    </p>
                    <p>
                        <i className="fa-solid fa-envelope mr-4" style="color: #f7f7f7;"></i>agenciadeviajes@gmail.com
                    </p>
                    <p>
                        <i className="fa-solid fa-phone mr-4" style="color: #f7f7f7;"></i>+92 3162856445
                    </p>
                    <p>
                        <i className="fa-solid fa-print mr-4" style="color: #f7f7f7;"></i>+01 335 633 77
                    </p>
                </div>
            </div>
            <hr className="mb-4"/>
            <div className="row align-items-center">
                <div className="col-md-7 col-lg-8">
                    <p>
                        Copyright @2020 All rights reserved by:
                        <a href="#" style="text-decoration: none;">
                            <strong className="text-warning">The Providers</strong>
                        </a>
                    </p>
                </div>
                <div className="col-md-5 col-lg-4">
                    <div className="text-center text-md-right">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a href="" class="btn-floating btn-sm text-white" style="font-size: 23px;">
                                    <i className="fa-brands fa-facebook" style="color: #f1f2f4;"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="" className="btn-floating btn-sm text-white" style="font-size: 23px;">
                                    <i className="fa-brands fa-twitter" style="color: #f1f2f4;"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="" class="btn-floating btn-sm text-white" style="font-size: 23px;">
                                    <i class="fa-brands fa-google-plus" style="color: #f1f2f4;"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="" class="btn-floating btn-sm text-white" style="font-size: 23px;">
                                    <i class="fa-brands fa-linkedin" style="color: #f1f2f4;"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="" class="btn-floating btn-sm text-white" style="font-size: 23px;">
                                    <i class="fa-brands fa-youtube" style="color: #f1f2f4;"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </footer>
        </>
    )
}
export default Footer;

