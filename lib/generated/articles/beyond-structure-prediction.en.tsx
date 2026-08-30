// @ts-nocheck
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    math: "math",
    mi: "mi",
    mo: "mo",
    mrow: "mrow",
    msub: "msub",
    mtext: "mtext",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    sup: "sup",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Demo article:"
        }), " This piece demonstrates AI × Bio’s support for long-form notes, equations, code, and citations. Replace or extend it with your own research before publication."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "reframing-the-prediction-problem",
      children: "Reframing the prediction problem"
    }), "\n", _jsxs(_components.p, {
      children: ["Protein structure prediction is often described as a map from sequence ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "s"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "s"
              })]
            })
          })
        }), _jsx(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "s"
            })]
          })
        })]
      }), " to three-dimensional coordinates ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "x"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "x"
              })]
            })
          })
        }), _jsx(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "x"
            })]
          })
        })]
      }), ":"]
    }), "\n", _jsx(_components.span, {
      className: "katex-display",
      children: _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "p"
                  }), _jsx(_components.mi, {
                    children: "θ"
                  })]
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "x"
                }), _jsx(_components.mo, {
                  children: "∣"
                }), _jsx(_components.mi, {
                  children: "s"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mo, {
                  children: "∫"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "p"
                  }), _jsx(_components.mi, {
                    children: "θ"
                  })]
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "x"
                }), _jsx(_components.mo, {
                  children: "∣"
                }), _jsx(_components.mi, {
                  children: "z"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "s"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "p"
                  }), _jsx(_components.mi, {
                    children: "θ"
                  })]
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "z"
                }), _jsx(_components.mo, {
                  children: "∣"
                }), _jsx(_components.mi, {
                  children: "s"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), _jsx(_components.mtext, {
                  children: " "
                }), _jsx(_components.mi, {
                  children: "d"
                }), _jsx(_components.mi, {
                  children: "z"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "p_\\theta(x\\mid s)=\\int p_\\theta(x\\mid z,s)p_\\theta(z\\mid s)\\,dz"
              })]
            })
          })
        }), _jsxs(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [_jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsx(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.02778em"
                            },
                            children: "θ"
                          })
                        })]
                      })
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "∣"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "="
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "2.2222em",
                verticalAlign: "-0.8622em"
              }
            }), _jsx(_components.span, {
              className: "mop op-symbol large-op",
              style: {
                marginRight: "0.44445em",
                position: "relative",
                top: "-0.0011em"
              },
              children: "∫"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsx(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.02778em"
                            },
                            children: "θ"
                          })
                        })]
                      })
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "∣"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            }), _jsx(_components.span, {
              className: "mpunct",
              children: ","
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsx(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.02778em"
                            },
                            children: "θ"
                          })
                        })]
                      })
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), _jsx(_components.span, {
              className: "mrel",
              children: "∣"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            })]
          })]
        })]
      })
    }), "\n", _jsx(_components.p, {
      children: "For complexes that contain proteins, nucleic acids, small molecules, and ions, however, the model is doing more than coordinate regression. It must also learn which entities might interact, how chemistry constrains local geometry, and which biases in the data can masquerade as biological rules."
    }), "\n", _jsx(_components.h2, {
      id: "three-questions-for-a-close-reading",
      children: "Three questions for a close reading"
    }), "\n", _jsx(_components.h3, {
      id: "1-what-is-already-encoded-in-the-representation",
      children: "1. What is already encoded in the representation?"
    }), "\n", _jsxs(_components.p, {
      children: ["Atom types, bonds, residue indices, and templates are not neutral inputs. A careful reading separates structures the model ", _jsx(_components.strong, {
        children: "learns"
      }), " from structures the researcher has ", _jsx(_components.strong, {
        children: "encoded in advance"
      }), "."]
    }), "\n", _jsx(_components.h3, {
      id: "2-what-does-the-objective-reward",
      children: "2. What does the objective reward?"
    }), "\n", _jsx(_components.p, {
      children: "A diffusion model can formulate coordinate generation as iterative denoising. In deliberately simplified pseudocode:"
    }), "\n", _jsx(_components.pre, {
      children: _jsxs(_components.code, {
        className: "hljs language-python",
        children: [_jsx(_components.span, {
          className: "hljs-keyword",
          children: "for"
        }), " t ", _jsx(_components.span, {
          className: "hljs-keyword",
          children: "in"
        }), " ", _jsx(_components.span, {
          className: "hljs-built_in",
          children: "reversed"
        }), "(noise_schedule):\n    score = model(noisy_coordinates, tokens, t)\n    noisy_coordinates = denoise(noisy_coordinates, score, t)\n"]
      })
    }), "\n", _jsx(_components.p, {
      children: "A high benchmark score does not automatically imply an understanding of binding free energy, conformational dynamics, or the cellular environment."
    }), "\n", _jsx(_components.h3, {
      id: "3-where-does-failure-concentrate",
      children: "3. Where does failure concentrate?"
    }), "\n", _jsx(_components.p, {
      children: "The most informative question is often where a model fails: which molecular classes, conformational states, or out-of-distribution examples expose its limits? Failure modes reveal more about a model’s knowledge boundary than one average score."
    }), "\n", _jsx(_components.h2, {
      id: "a-reusable-reading-checklist",
      children: "A reusable reading checklist"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Identify the biological object and experimental reference."
      }), "\n", _jsx(_components.li, {
        children: "Draw the data flow from input representation to latent state to output."
      }), "\n", _jsx(_components.li, {
        children: "Separate the training objective, validation metric, and real-world goal."
      }), "\n", _jsx(_components.li, {
        children: "Record leakage risks, homology controls, and temporal splits."
      }), "\n", _jsx(_components.li, {
        children: "Turn unanswered questions into the next research note."
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["AlphaFold 3 demonstrates a unified approach to modelling interactions across biomolecular classes, and makes the question “what does the model know?” even more important to revisit.", _jsx(_components.sup, {
        children: _jsx(_components.a, {
          href: "#user-content-fn-paper",
          id: "user-content-fnref-paper",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      })]
    }), "\n", _jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [_jsx(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", _jsxs(_components.ol, {
        children: ["\n", _jsxs(_components.li, {
          id: "user-content-fn-paper",
          children: ["\n", _jsxs(_components.p, {
            children: ["Abramson et al., ", _jsx(_components.em, {
              children: "Accurate structure prediction of biomolecular interactions with AlphaFold 3"
            }), ", Nature 630, 493–500 (2024). ", _jsx(_components.a, {
              href: "#user-content-fnref-paper",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              className: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
