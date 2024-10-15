import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

function About() {
      return (
            <div className="grid place-content-center">
                  <div
                        className="bg-cover w-full flex justify-center items-center  h-screen"
                        style={{
                              backgroundImage: "url('/images/aboutus.jpg')"
                        }}
                  >
                        <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 2, y: 0 }}
                              transition={{ duration: 0.5 }}
                              className=" rounded-lg glass max-w-[90%] lg:w-[75%] p-2"
                        >
                              <p className="text-shadow-custom text-4xl text-center font-bold w-full text-white py-2 bg-primary font-serif">
                                    ABOUT US
                              </p>
                              <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 2, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className=" rounded-lg mt-4 shadow-md w-full"
                              >
                                    <div className="flex max-h-[80vh] overflow-auto landscape:h-[50%] md:landscape:h-[100%]   flex-col gap-6">
                                          <div className="glass p-4">
                                                <h2 className="text-2xl underline text-primary md:text-4xl font-bold mb-4">
                                                      Our Mission
                                                </h2>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      Our mission is to empower
                                                      immigrants to become fully
                                                      integrated and
                                                      self-sufficient members of
                                                      society.
                                                </p>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      We believe that every
                                                      individual, regardless of
                                                      their background, deserves
                                                      access to comprehensive
                                                      support systems that
                                                      facilitate their
                                                      transition into a new
                                                      country.
                                                </p>
                                                <p className="text-lg text-primary font-bold md:text-3xl">
                                                      Our organization is
                                                      committed to providing
                                                      continuous support to
                                                      immigrants far beyond the
                                                      initial settlement phase,
                                                      ensuring they have the
                                                      resources and guidance
                                                      they need to thrive.
                                                </p>
                                          </div>
                                          <div className="glass p-4">
                                                <h2 className="text-2xl underline text-primary md:text-4xl font-bold mb-4">
                                                      Who We Are
                                                </h2>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      Refugee Hope Bridge is a
                                                      dedicated nonprofit
                                                      organization focused on
                                                      supporting immigrants as
                                                      they navigate the
                                                      complexities of settling
                                                      into a new country.
                                                </p>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      Our team is passionate
                                                      about creating a welcoming
                                                      environment where
                                                      immigrants can find the
                                                      help they need to build a
                                                      successful and fulfilling
                                                      life.
                                                </p>
                                          </div>
                                          <div className="glass p-4">
                                                <h2 className="text-2xl underline text-primary md:text-4xl font-bold mb-4">
                                                      What We Do
                                                </h2>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      Initial Settlement
                                                      Assistance: Helping
                                                      newcomers with housing,
                                                      employment, and education.
                                                </p>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      Language and Cultural
                                                      Training: Providing
                                                      language classes and
                                                      cultural orientation to
                                                      ease the transition.
                                                </p>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      Ongoing Support:
                                                      Offering continuous
                                                      guidance and resources to
                                                      ensure long-term success
                                                      and integration.
                                                </p>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      Community Building:
                                                      Creating opportunities for
                                                      immigrants to connect with
                                                      each other and the broader
                                                      community.
                                                </p>
                                          </div>
                                          <div className="glass p-4">
                                                <h2 className="text-2xl underline text-primary md:text-4xl font-bold mb-4">
                                                      Our Impact
                                                </h2>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      Since our inception, we
                                                      have helped countless
                                                      immigrants achieve their
                                                      goals and become active,
                                                      contributing members of
                                                      society.
                                                </p>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      Our programs have made a
                                                      significant difference in
                                                      the lives of many,
                                                      providing them with the
                                                      tools and confidence
                                                      needed to succeed.
                                                </p>
                                          </div>
                                          <div className="glass p-4">
                                                <h2 className="text-2xl underline text-primary md:text-4xl font-bold mb-4">
                                                      Get Involved
                                                </h2>
                                                <p className="text-lg mb-4 text-primary font-bold md:text-3xl">
                                                      We invite you to join us
                                                      in our mission. Whether
                                                      you are looking to
                                                      volunteer, donate, or
                                                      simply learn more about
                                                      our work, there are many
                                                      ways to get involved and
                                                      make a difference.
                                                </p>
                                                <div className="flex justify-center text-white">
                                                    <Button type="primary" text='DONATE' border='white' hoverColor="primary" href={'#services'}/>
                                                </div>

                                          </div>
                                    </div>
                              </motion.div>
                        </motion.div>
                  </div>
            </div>
      );
}

export default About;
