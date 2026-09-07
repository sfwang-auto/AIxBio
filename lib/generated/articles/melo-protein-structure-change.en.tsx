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
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mover: "mover",
    mrow: "mrow",
    msub: "msub",
    msubsup: "msubsup",
    msup: "msup",
    mtext: "mtext",
    munderover: "munderover",
    ol: "ol",
    p: "p",
    path: "path",
    section: "section",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    sup: "sup",
    svg: "svg",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Paper at a glance:"
        }), " Zheng and colleagues introduce MELO in ", _jsx(_components.em, {
          children: "Nature Communications"
        }), ": a method that places protein structural change on two complementary axes and traces each signal back to individual amino-acid units (residues) or segment pairs. The interesting question is not merely whether it “beats TM-score,” but what labels, thresholds, and alignment choices make that claim possible.", _jsx(_components.sup, {
          children: _jsx(_components.a, {
            href: "#user-content-fn-paper",
            id: "user-content-fnref-paper",
            "data-footnote-ref": true,
            "aria-describedby": "footnote-label",
            children: "1"
          })
        })]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "the-real-question-is-not-only-how-similar-but-what-moved",
      children: "The real question is not only “how similar?” but “what moved?”"
    }), "\n", _jsx(_components.p, {
      children: "It is tempting to compress the difference between two protein structures into one number. RMSD measures average coordinate deviation after superposition; TM-score normalizes structural similarity for protein length; LDDT compares local distance patterns. Each solves a useful problem, but a global score can smooth over two biologically relevant events: a local secondary-structure transition and a near-rigid displacement between domains or segments."
    }), "\n", _jsx(_components.p, {
      children: "Consider a pair of scissors: the blades can retain their internal geometry while rotating relative to each other around the hinge. Looking only within domains may understate that motion, while looking only at the global superposition may overstate it. Conversely, a short α-helix can become disordered, affecting only a few dozen residues but still representing a meaningful local change."
    }), "\n", _jsxs(_components.p, {
      children: ["That is MELO's starting point. Rather than searching for a universal similarity score, ", _jsx(_components.strong, {
        children: "ME"
      }), "asuring and ", _jsx(_components.strong, {
        children: "LO"
      }), "cating structural change becomes two questions:"]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Has the local geometry of corresponding residues changed?"
      }), "\n", _jsx(_components.li, {
        children: "Have the relative positions of residues or structural segments changed?"
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      id: "two-coordinates-vss-and-sps",
      children: "Two coordinates: VSS and SPS"
    }), "\n", _jsxs(_components.p, {
      children: ["The first coordinate, ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsx(_components.mtext, {
                    children: "measur"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "VSS_{\\text{measur}}"
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
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "S"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "measur"
                              })
                            })
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
            })]
          })
        })]
      }), ", describes variation in secondary structure. Its calculation can be unpacked into four steps."]
    }), "\n", _jsx(_components.h3, {
      id: "how-is-vss-calculated-from-two-structures",
      children: "How is VSS calculated from two structures?"
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Step 1: establish residue correspondence."
      }), " MELO selects an alignment method according to sequence identity: Smith–Waterman sequence alignment above 30% and US-align structural alignment at or below 30%. The result is ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "N"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "N"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.10903em"
              },
              children: "N"
            })]
          })
        })]
      }), " matched residue pairs between structures A and B."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Step 2: represent each residue as a ten-dimensional vector."
      }), " For the ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "i"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "i"
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
                height: "0.6595em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "i"
            })]
          })
        })]
      }), "th matched pair, MELO uses DSSP to calculate ten geometric and environmental features separately for the two structures, then forms ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsxs(_components.mover, {
                    accent: "true",
                    children: [_jsx(_components.mi, {
                      children: "v"
                    }), _jsx(_components.mo, {
                      children: "⃗"
                    })]
                  }), _jsx(_components.mi, {
                    children: "i"
                  }), _jsx(_components.mi, {
                    children: "A"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\vec v_i^A"
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
                height: "1.1em",
                verticalAlign: "-0.2587em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord accent",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.714em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord mathnormal",
                          style: {
                            marginRight: "0.03588em"
                          },
                          children: "v"
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "accent-body",
                          style: {
                            left: "-0.2077em"
                          },
                          children: _jsx(_components.span, {
                            className: "overlay",
                            style: {
                              height: "0.714em",
                              width: "0.471em"
                            },
                            children: _jsx(_components.svg, {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "0.471em",
                              height: "0.714em",
                              style: {
                                width: "0.471em"
                              },
                              viewBox: "0 0 471 714",
                              preserveAspectRatio: "xMinYMin",
                              children: _jsx(_components.path, {
                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                              })
                            })
                          })
                        })]
                      })]
                    })
                  })
                })
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
                          marginLeft: "-0.0359em",
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
                            children: "i"
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            children: "A"
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2587em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " and ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsxs(_components.mover, {
                    accent: "true",
                    children: [_jsx(_components.mi, {
                      children: "v"
                    }), _jsx(_components.mo, {
                      children: "⃗"
                    })]
                  }), _jsx(_components.mi, {
                    children: "i"
                  }), _jsx(_components.mi, {
                    children: "B"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\vec v_i^B"
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
                height: "1.1em",
                verticalAlign: "-0.2587em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord accent",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.714em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord mathnormal",
                          style: {
                            marginRight: "0.03588em"
                          },
                          children: "v"
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "accent-body",
                          style: {
                            left: "-0.2077em"
                          },
                          children: _jsx(_components.span, {
                            className: "overlay",
                            style: {
                              height: "0.714em",
                              width: "0.471em"
                            },
                            children: _jsx(_components.svg, {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "0.471em",
                              height: "0.714em",
                              style: {
                                width: "0.471em"
                              },
                              viewBox: "0 0 471 714",
                              preserveAspectRatio: "xMinYMin",
                              children: _jsx(_components.path, {
                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                              })
                            })
                          })
                        })]
                      })]
                    })
                  })
                })
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
                          marginLeft: "-0.0359em",
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
                            children: "i"
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                              marginRight: "0.05017em"
                            },
                            children: "B"
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2587em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), ". The ten components are listed below:", _jsx(_components.sup, {
        children: _jsx(_components.a, {
          href: "#user-content-fn-dssp-fields",
          id: "user-content-fnref-dssp-fields",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "2"
        })
      })]
    }), "\n", _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Group"
          }), _jsx(_components.th, {
            children: "Features"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Backbone hydrogen bonds"
          }), _jsx(_components.td, {
            children: "N–H···O; second N–H···O; O···H–N; second O···H–N"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Local backbone geometry"
          }), _jsx(_components.td, {
            children: "KAPPA; PHI; PSI; ALPHA; TCO"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Solvent exposure"
          }), _jsx(_components.td, {
            children: "ACC"
          })]
        })]
      })]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Step 3: calculate a residue-level difference."
      }), " For each matched residue pair, calculate the scaled cosine difference:"]
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
                    children: "c"
                  }), _jsx(_components.mi, {
                    children: "i"
                  })]
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsxs(_components.mfrac, {
                  children: [_jsx(_components.mn, {
                    children: "1"
                  }), _jsx(_components.mn, {
                    children: "2"
                  })]
                }), _jsxs(_components.mrow, {
                  children: [_jsx(_components.mo, {
                    fence: "true",
                    children: "("
                  }), _jsx(_components.mn, {
                    children: "1"
                  }), _jsx(_components.mo, {
                    children: "−"
                  }), _jsxs(_components.mfrac, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsxs(_components.msubsup, {
                        children: [_jsxs(_components.mover, {
                          accent: "true",
                          children: [_jsx(_components.mi, {
                            children: "v"
                          }), _jsx(_components.mo, {
                            children: "⃗"
                          })]
                        }), _jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mi, {
                          children: "A"
                        })]
                      }), _jsx(_components.mo, {
                        children: "⋅"
                      }), _jsxs(_components.msubsup, {
                        children: [_jsxs(_components.mover, {
                          accent: "true",
                          children: [_jsx(_components.mi, {
                            children: "v"
                          }), _jsx(_components.mo, {
                            children: "⃗"
                          })]
                        }), _jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mi, {
                          children: "B"
                        })]
                      })]
                    }), _jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        stretchy: "false",
                        children: "∥"
                      }), _jsxs(_components.msubsup, {
                        children: [_jsxs(_components.mover, {
                          accent: "true",
                          children: [_jsx(_components.mi, {
                            children: "v"
                          }), _jsx(_components.mo, {
                            children: "⃗"
                          })]
                        }), _jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mi, {
                          children: "A"
                        })]
                      }), _jsx(_components.mo, {
                        stretchy: "false",
                        children: "∥"
                      }), _jsx(_components.mtext, {
                        children: " "
                      }), _jsx(_components.mo, {
                        stretchy: "false",
                        children: "∥"
                      }), _jsxs(_components.msubsup, {
                        children: [_jsxs(_components.mover, {
                          accent: "true",
                          children: [_jsx(_components.mi, {
                            children: "v"
                          }), _jsx(_components.mo, {
                            children: "⃗"
                          })]
                        }), _jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mi, {
                          children: "B"
                        })]
                      }), _jsx(_components.mo, {
                        stretchy: "false",
                        children: "∥"
                      })]
                    })]
                  }), _jsx(_components.mo, {
                    fence: "true",
                    children: ")"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "c_i=\\frac{1}{2}\\left(1-\n\\frac{\\vec v_i^A\\cdot\\vec v_i^B}\n{\\lVert\\vec v_i^A\\rVert\\,\\lVert\\vec v_i^B\\rVert}\n\\right)"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
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
                            children: "i"
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
                height: "2.5083em",
                verticalAlign: "-0.99em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mopen nulldelimiter"
              }), _jsx(_components.span, {
                className: "mfrac",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.3214em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.314em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord",
                          children: _jsx(_components.span, {
                            className: "mord",
                            children: "2"
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord",
                          children: _jsx(_components.span, {
                            className: "mord",
                            children: "1"
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.686em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              }), _jsx(_components.span, {
                className: "mclose nulldelimiter"
              })]
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsxs(_components.span, {
              className: "minner",
              children: [_jsx(_components.span, {
                className: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: _jsx(_components.span, {
                  className: "delimsizing size3",
                  children: "("
                })
              }), _jsx(_components.span, {
                className: "mord",
                children: "1"
              }), _jsx(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), _jsx(_components.span, {
                className: "mbin",
                children: "−"
              }), _jsx(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), _jsxs(_components.span, {
                className: "mord",
                children: [_jsx(_components.span, {
                  className: "mopen nulldelimiter"
                }), _jsx(_components.span, {
                  className: "mfrac",
                  children: _jsxs(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [_jsxs(_components.span, {
                      className: "vlist-r",
                      children: [_jsxs(_components.span, {
                        className: "vlist",
                        style: {
                          height: "1.5183em"
                        },
                        children: [_jsxs(_components.span, {
                          style: {
                            top: "-2.2869em"
                          },
                          children: [_jsx(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), _jsxs(_components.span, {
                            className: "mord",
                            children: [_jsx(_components.span, {
                              className: "mopen",
                              children: "∥"
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord accent",
                                children: _jsx(_components.span, {
                                  className: "vlist-t",
                                  children: _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.714em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "mord mathnormal",
                                          style: {
                                            marginRight: "0.03588em"
                                          },
                                          children: "v"
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "accent-body",
                                          style: {
                                            left: "-0.2077em"
                                          },
                                          children: _jsx(_components.span, {
                                            className: "overlay",
                                            style: {
                                              height: "0.714em",
                                              width: "0.471em"
                                            },
                                            children: _jsx(_components.svg, {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              width: "0.471em",
                                              height: "0.714em",
                                              style: {
                                                width: "0.471em"
                                              },
                                              viewBox: "0 0 471 714",
                                              preserveAspectRatio: "xMinYMin",
                                              children: _jsx(_components.path, {
                                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                                              })
                                            })
                                          })
                                        })]
                                      })]
                                    })
                                  })
                                })
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8231em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4231em",
                                          marginLeft: "-0.0359em",
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
                                            children: "i"
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.0448em",
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
                                            children: "A"
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.2769em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mclose",
                              children: "∥"
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.1667em"
                              }
                            }), _jsx(_components.span, {
                              className: "mopen",
                              children: "∥"
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord accent",
                                children: _jsx(_components.span, {
                                  className: "vlist-t",
                                  children: _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.714em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "mord mathnormal",
                                          style: {
                                            marginRight: "0.03588em"
                                          },
                                          children: "v"
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "accent-body",
                                          style: {
                                            left: "-0.2077em"
                                          },
                                          children: _jsx(_components.span, {
                                            className: "overlay",
                                            style: {
                                              height: "0.714em",
                                              width: "0.471em"
                                            },
                                            children: _jsx(_components.svg, {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              width: "0.471em",
                                              height: "0.714em",
                                              style: {
                                                width: "0.471em"
                                              },
                                              viewBox: "0 0 471 714",
                                              preserveAspectRatio: "xMinYMin",
                                              children: _jsx(_components.path, {
                                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                                              })
                                            })
                                          })
                                        })]
                                      })]
                                    })
                                  })
                                })
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8231em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4231em",
                                          marginLeft: "-0.0359em",
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
                                            children: "i"
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.0448em",
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
                                              marginRight: "0.05017em"
                                            },
                                            children: "B"
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.2769em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mclose",
                              children: "∥"
                            })]
                          })]
                        }), _jsxs(_components.span, {
                          style: {
                            top: "-3.23em"
                          },
                          children: [_jsx(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), _jsx(_components.span, {
                            className: "frac-line",
                            style: {
                              borderBottomWidth: "0.04em"
                            }
                          })]
                        }), _jsxs(_components.span, {
                          style: {
                            top: "-3.677em"
                          },
                          children: [_jsx(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), _jsxs(_components.span, {
                            className: "mord",
                            children: [_jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord accent",
                                children: _jsx(_components.span, {
                                  className: "vlist-t",
                                  children: _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.714em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "mord mathnormal",
                                          style: {
                                            marginRight: "0.03588em"
                                          },
                                          children: "v"
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "accent-body",
                                          style: {
                                            left: "-0.2077em"
                                          },
                                          children: _jsx(_components.span, {
                                            className: "overlay",
                                            style: {
                                              height: "0.714em",
                                              width: "0.471em"
                                            },
                                            children: _jsx(_components.svg, {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              width: "0.471em",
                                              height: "0.714em",
                                              style: {
                                                width: "0.471em"
                                              },
                                              viewBox: "0 0 471 714",
                                              preserveAspectRatio: "xMinYMin",
                                              children: _jsx(_components.path, {
                                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                                              })
                                            })
                                          })
                                        })]
                                      })]
                                    })
                                  })
                                })
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8413em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4413em",
                                          marginLeft: "-0.0359em",
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
                                            children: "i"
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.063em",
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
                                            children: "A"
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.2587em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), _jsx(_components.span, {
                              className: "mbin",
                              children: "⋅"
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord accent",
                                children: _jsx(_components.span, {
                                  className: "vlist-t",
                                  children: _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.714em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "mord mathnormal",
                                          style: {
                                            marginRight: "0.03588em"
                                          },
                                          children: "v"
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3em"
                                          }
                                        }), _jsx(_components.span, {
                                          className: "accent-body",
                                          style: {
                                            left: "-0.2077em"
                                          },
                                          children: _jsx(_components.span, {
                                            className: "overlay",
                                            style: {
                                              height: "0.714em",
                                              width: "0.471em"
                                            },
                                            children: _jsx(_components.svg, {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              width: "0.471em",
                                              height: "0.714em",
                                              style: {
                                                width: "0.471em"
                                              },
                                              viewBox: "0 0 471 714",
                                              preserveAspectRatio: "xMinYMin",
                                              children: _jsx(_components.path, {
                                                d: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"
                                              })
                                            })
                                          })
                                        })]
                                      })]
                                    })
                                  })
                                })
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8413em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4413em",
                                          marginLeft: "-0.0359em",
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
                                            children: "i"
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.063em",
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
                                              marginRight: "0.05017em"
                                            },
                                            children: "B"
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.2587em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            })]
                          })]
                        })]
                      }), _jsx(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-r",
                      children: _jsx(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.99em"
                        },
                        children: _jsx(_components.span, {})
                      })
                    })]
                  })
                }), _jsx(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              }), _jsx(_components.span, {
                className: "mclose delimcenter",
                style: {
                  top: "0em"
                },
                children: _jsx(_components.span, {
                  className: "delimsizing size3",
                  children: ")"
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Step 4: average, then stretch the scale."
      }), " MELO first averages over the ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "N"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "N"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.10903em"
              },
              children: "N"
            })]
          })
        })]
      }), " aligned residues:"]
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
                    children: "c"
                  }), _jsx(_components.mtext, {
                    children: "ave"
                  })]
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsxs(_components.mfrac, {
                  children: [_jsx(_components.mn, {
                    children: "1"
                  }), _jsx(_components.mi, {
                    children: "N"
                  })]
                }), _jsxs(_components.munderover, {
                  children: [_jsx(_components.mo, {
                    children: "∑"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      children: "="
                    }), _jsx(_components.mn, {
                      children: "1"
                    })]
                  }), _jsx(_components.mi, {
                    children: "N"
                  })]
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "c"
                  }), _jsx(_components.mi, {
                    children: "i"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "c_{\\text{ave}}=\\frac{1}{N}\\sum_{i=1}^{N}c_i"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "ave"
                              })
                            })
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
                height: "3.106em",
                verticalAlign: "-1.2777em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mopen nulldelimiter"
              }), _jsx(_components.span, {
                className: "mfrac",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.3214em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.314em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord",
                          children: _jsx(_components.span, {
                            className: "mord mathnormal",
                            style: {
                              marginRight: "0.10903em"
                            },
                            children: "N"
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord",
                          children: _jsx(_components.span, {
                            className: "mord",
                            children: "1"
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.686em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              }), _jsx(_components.span, {
                className: "mclose nulldelimiter"
              })]
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mop op-limits",
              children: _jsxs(_components.span, {
                className: "vlist-t vlist-t2",
                children: [_jsxs(_components.span, {
                  className: "vlist-r",
                  children: [_jsxs(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.8283em"
                    },
                    children: [_jsxs(_components.span, {
                      style: {
                        top: "-1.8723em",
                        marginLeft: "0em"
                      },
                      children: [_jsx(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), _jsx(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: _jsxs(_components.span, {
                          className: "mord mtight",
                          children: [_jsx(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          }), _jsx(_components.span, {
                            className: "mrel mtight",
                            children: "="
                          }), _jsx(_components.span, {
                            className: "mord mtight",
                            children: "1"
                          })]
                        })
                      })]
                    }), _jsxs(_components.span, {
                      style: {
                        top: "-3.05em"
                      },
                      children: [_jsx(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), _jsx(_components.span, {
                        children: _jsx(_components.span, {
                          className: "mop op-symbol large-op",
                          children: "∑"
                        })
                      })]
                    }), _jsxs(_components.span, {
                      style: {
                        top: "-4.3em",
                        marginLeft: "0em"
                      },
                      children: [_jsx(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), _jsx(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: _jsx(_components.span, {
                          className: "mord mtight",
                          children: _jsx(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.10903em"
                            },
                            children: "N"
                          })
                        })
                      })]
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-s",
                    children: "​"
                  })]
                }), _jsx(_components.span, {
                  className: "vlist-r",
                  children: _jsx(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.2777em"
                    },
                    children: _jsx(_components.span, {})
                  })
                })]
              })
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
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
                            children: "i"
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
            })]
          })]
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The authors find that ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "c"
                  }), _jsx(_components.mtext, {
                    children: "ave"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "c_{\\text{ave}}"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "ave"
                              })
                            })
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
            })]
          })
        })]
      }), " is concentrated between 0 and 0.1 across two million PDB structure pairs. To spread out that narrow region, they apply a nonlinear transformation:"]
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
                children: [_jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsx(_components.mtext, {
                    children: "measur"
                  })]
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "1"
                }), _jsx(_components.mo, {
                  children: "−"
                }), _jsxs(_components.msup, {
                  children: [_jsxs(_components.mrow, {
                    children: [_jsx(_components.mo, {
                      fence: "true",
                      children: "("
                    }), _jsx(_components.mn, {
                      children: "1"
                    }), _jsx(_components.mo, {
                      children: "−"
                    }), _jsxs(_components.msub, {
                      children: [_jsx(_components.mi, {
                        children: "c"
                      }), _jsx(_components.mtext, {
                        children: "ave"
                      })]
                    }), _jsx(_components.mo, {
                      fence: "true",
                      children: ")"
                    })]
                  }), _jsx(_components.mn, {
                    children: "9"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "VSS_{\\text{measur}}=1-\\left(1-c_{\\text{ave}}\\right)^9"
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
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "S"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "measur"
                              })
                            })
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
                height: "0.7278em",
                verticalAlign: "-0.0833em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "1"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), _jsx(_components.span, {
              className: "mbin",
              children: "−"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1.204em",
                verticalAlign: "-0.25em"
              }
            }), _jsxs(_components.span, {
              className: "minner",
              children: [_jsxs(_components.span, {
                className: "minner",
                children: [_jsx(_components.span, {
                  className: "mopen delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  className: "mord",
                  children: "1"
                }), _jsx(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), _jsx(_components.span, {
                  className: "mbin",
                  children: "−"
                }), _jsx(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), _jsxs(_components.span, {
                  className: "mord",
                  children: [_jsx(_components.span, {
                    className: "mord mathnormal",
                    children: "c"
                  }), _jsx(_components.span, {
                    className: "msupsub",
                    children: _jsxs(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [_jsxs(_components.span, {
                        className: "vlist-r",
                        children: [_jsx(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.1514em"
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
                                className: "mord mtight",
                                children: _jsx(_components.span, {
                                  className: "mord text mtight",
                                  children: _jsx(_components.span, {
                                    className: "mord mtight",
                                    children: "ave"
                                  })
                                })
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
                  className: "mclose delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: ")"
                })]
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.954em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-3.2029em",
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
                            className: "mord mtight",
                            children: "9"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", _jsx(_components.p, {
      children: "This transformation stretches differences near zero while keeping the result between 0 and 1."
    }), "\n", _jsx(_components.h3, {
      id: "how-does-sps-measure-segment-motion",
      children: "How does SPS measure segment motion?"
    }), "\n", _jsxs(_components.p, {
      children: ["The second coordinate, ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsx(_components.mtext, {
                    children: "measur"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS_{\\text{measur}}"
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
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "SP"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "measur"
                              })
                            })
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
            })]
          })
        })]
      }), ", captures shifts among protein segments. After residue correspondence is established, MELO compares the distance between every residue pair ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "i"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "j"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "i,j"
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
                height: "0.854em",
                verticalAlign: "-0.1944em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "i"
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
              style: {
                marginRight: "0.05724em"
              },
              children: "j"
            })]
          })
        })]
      }), " in structures A and B and normalizes the change by the larger of the two original distances:"]
    }), "\n", _jsx(_components.p, {
      children: "The motivation is to separate two types of change: VSS asks whether local residue geometry has changed, whereas SPS uses changes in residue-pair distances to measure relative motion between segments."
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
                children: [_jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "D"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mtext, {
                    children: "norm"
                  })]
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsxs(_components.mfrac, {
                  children: [_jsxs(_components.mrow, {
                    children: [_jsx(_components.mo, {
                      fence: "true",
                      children: "∣"
                    }), _jsxs(_components.msubsup, {
                      children: [_jsx(_components.mi, {
                        children: "d"
                      }), _jsxs(_components.mrow, {
                        children: [_jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mo, {
                          separator: "true",
                          children: ","
                        }), _jsx(_components.mi, {
                          children: "j"
                        })]
                      }), _jsx(_components.mi, {
                        children: "A"
                      })]
                    }), _jsx(_components.mo, {
                      children: "−"
                    }), _jsxs(_components.msubsup, {
                      children: [_jsx(_components.mi, {
                        children: "d"
                      }), _jsxs(_components.mrow, {
                        children: [_jsx(_components.mi, {
                          children: "i"
                        }), _jsx(_components.mo, {
                          separator: "true",
                          children: ","
                        }), _jsx(_components.mi, {
                          children: "j"
                        })]
                      }), _jsx(_components.mi, {
                        children: "B"
                      })]
                    }), _jsx(_components.mo, {
                      fence: "true",
                      children: "∣"
                    })]
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "max"
                    }), _jsx(_components.mo, {
                      children: "⁡"
                    }), _jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        fence: "true",
                        children: "("
                      }), _jsxs(_components.msubsup, {
                        children: [_jsx(_components.mi, {
                          children: "d"
                        }), _jsxs(_components.mrow, {
                          children: [_jsx(_components.mi, {
                            children: "i"
                          }), _jsx(_components.mo, {
                            separator: "true",
                            children: ","
                          }), _jsx(_components.mi, {
                            children: "j"
                          })]
                        }), _jsx(_components.mi, {
                          children: "A"
                        })]
                      }), _jsx(_components.mo, {
                        separator: "true",
                        children: ","
                      }), _jsxs(_components.msubsup, {
                        children: [_jsx(_components.mi, {
                          children: "d"
                        }), _jsxs(_components.mrow, {
                          children: [_jsx(_components.mi, {
                            children: "i"
                          }), _jsx(_components.mo, {
                            separator: "true",
                            children: ","
                          }), _jsx(_components.mi, {
                            children: "j"
                          })]
                        }), _jsx(_components.mi, {
                          children: "B"
                        })]
                      }), _jsx(_components.mo, {
                        fence: "true",
                        children: ")"
                      })]
                    })]
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_{i,j}^{\\text{norm}}=\n\\frac{\\left|d_{i,j}^{A}-d_{i,j}^{B}\\right|}\n{\\max\\left(d_{i,j}^{A},d_{i,j}^{B}\\right)}"
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
                height: "1.0975em",
                verticalAlign: "-0.3831em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.02778em"
                },
                children: "D"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.7144em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.453em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.113em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "norm"
                              })
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3831em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
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
                height: "2.7877em",
                verticalAlign: "-1.153em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mopen nulldelimiter"
              }), _jsx(_components.span, {
                className: "mfrac",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.6348em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.26em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsxs(_components.span, {
                          className: "mord",
                          children: [_jsx(_components.span, {
                            className: "mop",
                            children: "max"
                          }), _jsx(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.1667em"
                            }
                          }), _jsxs(_components.span, {
                            className: "minner",
                            children: [_jsx(_components.span, {
                              className: "mopen delimcenter",
                              style: {
                                top: "0em"
                              },
                              children: _jsx(_components.span, {
                                className: "delimsizing size1",
                                children: "("
                              })
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8231em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4231em",
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
                                          children: _jsxs(_components.span, {
                                            className: "mord mtight",
                                            children: [_jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            }), _jsx(_components.span, {
                                              className: "mpunct mtight",
                                              children: ","
                                            }), _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05724em"
                                              },
                                              children: "j"
                                            })]
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.0448em",
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
                                            className: "mord mtight",
                                            children: _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "A"
                                            })
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.413em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mpunct",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.1667em"
                              }
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8231em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4231em",
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
                                          children: _jsxs(_components.span, {
                                            className: "mord mtight",
                                            children: [_jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            }), _jsx(_components.span, {
                                              className: "mpunct mtight",
                                              children: ","
                                            }), _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05724em"
                                              },
                                              children: "j"
                                            })]
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.0448em",
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
                                            className: "mord mtight",
                                            children: _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05017em"
                                              },
                                              children: "B"
                                            })
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.413em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mclose delimcenter",
                              style: {
                                top: "0em"
                              },
                              children: _jsx(_components.span, {
                                className: "delimsizing size1",
                                children: ")"
                              })
                            })]
                          })]
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.7848em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), _jsx(_components.span, {
                          className: "mord",
                          children: _jsxs(_components.span, {
                            className: "minner",
                            children: [_jsx(_components.span, {
                              className: "mopen",
                              children: _jsx(_components.span, {
                                className: "delimsizing mult",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.85em"
                                      },
                                      children: _jsxs(_components.span, {
                                        style: {
                                          top: "-2.85em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3.2em"
                                          }
                                        }), _jsx(_components.span, {
                                          style: {
                                            width: "0.333em",
                                            height: "1.200em"
                                          },
                                          children: _jsx(_components.svg, {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "0.333em",
                                            height: "1.200em",
                                            viewBox: "0 0 333 1200",
                                            children: _jsx(_components.path, {
                                              d: "M145 15 v585 v0 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v0 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v0 v585 h43z"
                                            })
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
                                        height: "0.35em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8413em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4413em",
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
                                          children: _jsxs(_components.span, {
                                            className: "mord mtight",
                                            children: [_jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            }), _jsx(_components.span, {
                                              className: "mpunct mtight",
                                              children: ","
                                            }), _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05724em"
                                              },
                                              children: "j"
                                            })]
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.063em",
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
                                            className: "mord mtight",
                                            children: _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "A"
                                            })
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.3948em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), _jsx(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), _jsx(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), _jsxs(_components.span, {
                              className: "mord",
                              children: [_jsx(_components.span, {
                                className: "mord mathnormal",
                                children: "d"
                              }), _jsx(_components.span, {
                                className: "msupsub",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsxs(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8413em"
                                      },
                                      children: [_jsxs(_components.span, {
                                        style: {
                                          top: "-2.4413em",
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
                                          children: _jsxs(_components.span, {
                                            className: "mord mtight",
                                            children: [_jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            }), _jsx(_components.span, {
                                              className: "mpunct mtight",
                                              children: ","
                                            }), _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05724em"
                                              },
                                              children: "j"
                                            })]
                                          })
                                        })]
                                      }), _jsxs(_components.span, {
                                        style: {
                                          top: "-3.063em",
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
                                            className: "mord mtight",
                                            children: _jsx(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.05017em"
                                              },
                                              children: "B"
                                            })
                                          })
                                        })]
                                      })]
                                    }), _jsx(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), _jsx(_components.span, {
                                    className: "vlist-r",
                                    children: _jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.3948em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })]
                            }), _jsx(_components.span, {
                              className: "mclose",
                              children: _jsx(_components.span, {
                                className: "delimsizing mult",
                                children: _jsxs(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [_jsxs(_components.span, {
                                    className: "vlist-r",
                                    children: [_jsx(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.85em"
                                      },
                                      children: _jsxs(_components.span, {
                                        style: {
                                          top: "-2.85em"
                                        },
                                        children: [_jsx(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "3.2em"
                                          }
                                        }), _jsx(_components.span, {
                                          style: {
                                            width: "0.333em",
                                            height: "1.200em"
                                          },
                                          children: _jsx(_components.svg, {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "0.333em",
                                            height: "1.200em",
                                            viewBox: "0 0 333 1200",
                                            children: _jsx(_components.path, {
                                              d: "M145 15 v585 v0 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v0 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v0 v585 h43z"
                                            })
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
                                        height: "0.35em"
                                      },
                                      children: _jsx(_components.span, {})
                                    })
                                  })]
                                })
                              })
                            })]
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.153em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              }), _jsx(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Here, ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "d"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mi, {
                    children: "A"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "d_{i,j}^{A}"
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
                height: "1.2361em",
                verticalAlign: "-0.3948em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
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
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "A"
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3948em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " and ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "d"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mi, {
                    children: "B"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "d_{i,j}^{B}"
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
                height: "1.2361em",
                verticalAlign: "-0.3948em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
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
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05017em"
                              },
                              children: "B"
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3948em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " are the spatial distances between residues ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "i"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "j"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "i,j"
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
                height: "0.854em",
                verticalAlign: "-0.1944em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "i"
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
              style: {
                marginRight: "0.05724em"
              },
              children: "j"
            })]
          })
        })]
      }), " in the two structures, and ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "D"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mtext, {
                    children: "norm"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_{i,j}^{\\text{norm}}"
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
                height: "1.0781em",
                verticalAlign: "-0.3948em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.02778em"
                },
                children: "D"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.6644em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "norm"
                              })
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3948em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " lies between 0 and 1. MELO averages over all residue pairs to obtain ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "D"
                  }), _jsx(_components.mtext, {
                    children: "ave"
                  }), _jsx(_components.mtext, {
                    children: "norm"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_{\\text{ave}}^{\\text{norm}}"
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
                height: "0.9303em",
                verticalAlign: "-0.247em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.02778em"
                },
                children: "D"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.6644em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.453em",
                          marginLeft: "-0.0278em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "ave"
                              })
                            })
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "norm"
                              })
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.247em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), ", then applies the same transformation used for VSS:"]
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
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsx(_components.mtext, {
                    children: "measur"
                  })]
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "1"
                }), _jsx(_components.mo, {
                  children: "−"
                }), _jsxs(_components.msup, {
                  children: [_jsxs(_components.mrow, {
                    children: [_jsx(_components.mo, {
                      fence: "true",
                      children: "("
                    }), _jsx(_components.mn, {
                      children: "1"
                    }), _jsx(_components.mo, {
                      children: "−"
                    }), _jsxs(_components.msubsup, {
                      children: [_jsx(_components.mi, {
                        children: "D"
                      }), _jsx(_components.mtext, {
                        children: "ave"
                      }), _jsx(_components.mtext, {
                        children: "norm"
                      })]
                    }), _jsx(_components.mo, {
                      fence: "true",
                      children: ")"
                    })]
                  }), _jsx(_components.mn, {
                    children: "9"
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS_{\\text{measur}}=1-\\left(1-D_{\\text{ave}}^{\\text{norm}}\\right)^9"
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
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "SP"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "measur"
                              })
                            })
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
                height: "0.7278em",
                verticalAlign: "-0.0833em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "1"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), _jsx(_components.span, {
              className: "mbin",
              children: "−"
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), _jsxs(_components.span, {
            className: "base",
            children: [_jsx(_components.span, {
              className: "strut",
              style: {
                height: "1.204em",
                verticalAlign: "-0.25em"
              }
            }), _jsxs(_components.span, {
              className: "minner",
              children: [_jsxs(_components.span, {
                className: "minner",
                children: [_jsx(_components.span, {
                  className: "mopen delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  className: "mord",
                  children: "1"
                }), _jsx(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), _jsx(_components.span, {
                  className: "mbin",
                  children: "−"
                }), _jsx(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), _jsxs(_components.span, {
                  className: "mord",
                  children: [_jsx(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.02778em"
                    },
                    children: "D"
                  }), _jsx(_components.span, {
                    className: "msupsub",
                    children: _jsxs(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [_jsxs(_components.span, {
                        className: "vlist-r",
                        children: [_jsxs(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.7144em"
                          },
                          children: [_jsxs(_components.span, {
                            style: {
                              top: "-2.453em",
                              marginLeft: "-0.0278em",
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
                                className: "mord mtight",
                                children: _jsx(_components.span, {
                                  className: "mord text mtight",
                                  children: _jsx(_components.span, {
                                    className: "mord mtight",
                                    children: "ave"
                                  })
                                })
                              })
                            })]
                          }), _jsxs(_components.span, {
                            style: {
                              top: "-3.113em",
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
                                className: "mord mtight",
                                children: _jsx(_components.span, {
                                  className: "mord text mtight",
                                  children: _jsx(_components.span, {
                                    className: "mord mtight",
                                    children: "norm"
                                  })
                                })
                              })
                            })]
                          })]
                        }), _jsx(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), _jsx(_components.span, {
                        className: "vlist-r",
                        children: _jsx(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.247em"
                          },
                          children: _jsx(_components.span, {})
                        })
                      })]
                    })
                  })]
                }), _jsx(_components.span, {
                  className: "mclose delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: ")"
                })]
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.954em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-3.2029em",
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
                            className: "mord mtight",
                            children: "9"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Rather than collapsing the distance matrix completely, ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "L"
                }), _jsx(_components.mi, {
                  children: "O"
                }), _jsxs(_components.msup, {
                  children: [_jsx(_components.mi, {
                    children: "T"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "S"
                    }), _jsx(_components.mi, {
                      children: "P"
                    }), _jsx(_components.mi, {
                      children: "S"
                    })]
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "PLOT^{SPS}"
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
                height: "0.8413em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "P"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "L"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.02778em"
              },
              children: "O"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.13889em"
                },
                children: "T"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05764em"
                              },
                              children: "SPS"
                            })
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })
        })]
      }), " retains every ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "D"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mtext, {
                    children: "norm"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_{i,j}^{\\text{norm}}"
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
                height: "1.0781em",
                verticalAlign: "-0.3948em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.02778em"
                },
                children: "D"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.6644em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "norm"
                              })
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3948em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " and reveals which residue segments move relative to one another."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Usage limitation."
      }), " Subsequent calculations use only these ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsx(_components.mi, {
                  children: "N"
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "N"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.10903em"
              },
              children: "N"
            })]
          })
        })]
      }), " corresponding residue pairs: VSS computes ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "c"
                  }), _jsx(_components.mi, {
                    children: "i"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "c_i"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
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
                            children: "i"
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
            })]
          })
        })]
      }), " for each matched pair, while SPS computes ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsx(_components.mrow, {
                children: _jsxs(_components.msubsup, {
                  children: [_jsx(_components.mi, {
                    children: "D"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "i"
                    }), _jsx(_components.mo, {
                      separator: "true",
                      children: ","
                    }), _jsx(_components.mi, {
                      children: "j"
                    })]
                  }), _jsx(_components.mtext, {
                    children: "norm"
                  })]
                })
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_{i,j}^{\\text{norm}}"
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
                height: "1.0781em",
                verticalAlign: "-0.3948em"
              }
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.02778em"
                },
                children: "D"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsxs(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.6644em"
                      },
                      children: [_jsxs(_components.span, {
                        style: {
                          top: "-2.4413em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), _jsx(_components.span, {
                              className: "mpunct mtight",
                              children: ","
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05724em"
                              },
                              children: "j"
                            })]
                          })
                        })]
                      }), _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord text mtight",
                              children: _jsx(_components.span, {
                                className: "mord mtight",
                                children: "norm"
                              })
                            })
                          })
                        })]
                      })]
                    }), _jsx(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3948em"
                      },
                      children: _jsx(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " between pairs of these corresponding residues. Unmatched residues do not enter the averages. If the structural change is concentrated in insertions, deletions, or other unaligned regions, the metrics may underestimate whole-protein change, so alignment coverage should be considered alongside the scores."]
    }), "\n", _jsx(_components.p, {
      children: "The authors also define a convenient ranking score:"
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
                children: [_jsx(_components.mi, {
                  children: "M"
                }), _jsx(_components.mi, {
                  children: "E"
                }), _jsx(_components.mi, {
                  children: "L"
                }), _jsx(_components.mi, {
                  children: "O"
                }), _jsx(_components.mtext, {
                  children: "-"
                }), _jsx(_components.mi, {
                  children: "s"
                }), _jsx(_components.mi, {
                  children: "c"
                }), _jsx(_components.mi, {
                  children: "o"
                }), _jsx(_components.mi, {
                  children: "r"
                }), _jsx(_components.mi, {
                  children: "e"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mi, {
                  children: "max"
                }), _jsx(_components.mo, {
                  children: "⁡"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "m"
                    }), _jsx(_components.mi, {
                      children: "e"
                    }), _jsx(_components.mi, {
                      children: "a"
                    }), _jsx(_components.mi, {
                      children: "s"
                    }), _jsx(_components.mi, {
                      children: "u"
                    }), _jsx(_components.mi, {
                      children: "r"
                    })]
                  })]
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsxs(_components.msub, {
                  children: [_jsx(_components.mi, {
                    children: "S"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "m"
                    }), _jsx(_components.mi, {
                      children: "e"
                    }), _jsx(_components.mi, {
                      children: "a"
                    }), _jsx(_components.mi, {
                      children: "s"
                    }), _jsx(_components.mi, {
                      children: "u"
                    }), _jsx(_components.mi, {
                      children: "r"
                    })]
                  })]
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "MELO\\text{-}score=\\max(VSS_{measur},SPS_{measur})"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "ME"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "L"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.02778em"
              },
              children: "O"
            }), _jsx(_components.span, {
              className: "mord text",
              children: _jsx(_components.span, {
                className: "mord",
                children: "-"
              })
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "score"
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
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mop",
              children: "max"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "S"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "m"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "e"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "a"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "s"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "u"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "r"
                            })]
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
              className: "mpunct",
              children: ","
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "SP"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.05764em"
                },
                children: "S"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsxs(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [_jsxs(_components.span, {
                    className: "vlist-r",
                    children: [_jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1514em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0576em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "m"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "e"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "a"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "s"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "u"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "r"
                            })]
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
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      })
    }), "\n", _jsx(_components.p, {
      children: "Yet the two-dimensional result is more informative than the maximum:"
    }), "\n", _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Region"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mi, {
                        children: "V"
                      }), _jsx(_components.mi, {
                        children: "S"
                      }), _jsxs(_components.msub, {
                        children: [_jsx(_components.mi, {
                          children: "S"
                        }), _jsxs(_components.mrow, {
                          children: [_jsx(_components.mi, {
                            children: "m"
                          }), _jsx(_components.mi, {
                            children: "e"
                          }), _jsx(_components.mi, {
                            children: "a"
                          }), _jsx(_components.mi, {
                            children: "s"
                          }), _jsx(_components.mi, {
                            children: "u"
                          }), _jsx(_components.mi, {
                            children: "r"
                          })]
                        })]
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "VSS_{measur}"
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
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.22222em"
                    },
                    children: "V"
                  }), _jsx(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.05764em"
                    },
                    children: "S"
                  }), _jsxs(_components.span, {
                    className: "mord",
                    children: [_jsx(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.05764em"
                      },
                      children: "S"
                    }), _jsx(_components.span, {
                      className: "msupsub",
                      children: _jsxs(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [_jsxs(_components.span, {
                          className: "vlist-r",
                          children: [_jsx(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.1514em"
                            },
                            children: _jsxs(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0576em",
                                marginRight: "0.05em"
                              },
                              children: [_jsx(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), _jsx(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: _jsxs(_components.span, {
                                  className: "mord mtight",
                                  children: [_jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "m"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "e"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "a"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "s"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "u"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.02778em"
                                    },
                                    children: "r"
                                  })]
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
                  })]
                })
              })]
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mi, {
                        children: "S"
                      }), _jsx(_components.mi, {
                        children: "P"
                      }), _jsxs(_components.msub, {
                        children: [_jsx(_components.mi, {
                          children: "S"
                        }), _jsxs(_components.mrow, {
                          children: [_jsx(_components.mi, {
                            children: "m"
                          }), _jsx(_components.mi, {
                            children: "e"
                          }), _jsx(_components.mi, {
                            children: "a"
                          }), _jsx(_components.mi, {
                            children: "s"
                          }), _jsx(_components.mi, {
                            children: "u"
                          }), _jsx(_components.mi, {
                            children: "r"
                          })]
                        })]
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "SPS_{measur}"
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
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.13889em"
                    },
                    children: "SP"
                  }), _jsxs(_components.span, {
                    className: "mord",
                    children: [_jsx(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.05764em"
                      },
                      children: "S"
                    }), _jsx(_components.span, {
                      className: "msupsub",
                      children: _jsxs(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [_jsxs(_components.span, {
                          className: "vlist-r",
                          children: [_jsx(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.1514em"
                            },
                            children: _jsxs(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0576em",
                                marginRight: "0.05em"
                              },
                              children: [_jsx(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), _jsx(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: _jsxs(_components.span, {
                                  className: "mord mtight",
                                  children: [_jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "m"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "e"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "a"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "s"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "u"
                                  }), _jsx(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.02778em"
                                    },
                                    children: "r"
                                  })]
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
                  })]
                })
              })]
            })
          }), _jsx(_components.th, {
            children: "Structural interpretation"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Q1"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "<"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "<0.5"
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
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "<"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "<"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "<0.5"
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
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "<"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            children: "Neither change threshold is reached"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Q2"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "<"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "<0.5"
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
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "<"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "≥"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\ge 0.5"
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
                      height: "0.7719em",
                      verticalAlign: "-0.136em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "≥"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            children: "Predominantly segment or domain motion"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Q3"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "≥"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\ge 0.5"
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
                      height: "0.7719em",
                      verticalAlign: "-0.136em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "≥"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "≥"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\ge 0.5"
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
                      height: "0.7719em",
                      verticalAlign: "-0.136em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "≥"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            children: "Secondary-structure change plus segment motion"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Q4"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "≥"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\ge 0.5"
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
                      height: "0.7719em",
                      verticalAlign: "-0.136em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "≥"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsxs(_components.span, {
              className: "katex",
              children: [_jsx(_components.span, {
                className: "katex-mathml",
                children: _jsx(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: _jsxs(_components.semantics, {
                    children: [_jsxs(_components.mrow, {
                      children: [_jsx(_components.mo, {
                        children: "<"
                      }), _jsx(_components.mn, {
                        children: "0.5"
                      })]
                    }), _jsx(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "<0.5"
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
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), _jsx(_components.span, {
                    className: "mrel",
                    children: "<"
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
                      height: "0.6444em"
                    }
                  }), _jsx(_components.span, {
                    className: "mord",
                    children: "0.5"
                  })]
                })]
              })]
            })
          }), _jsx(_components.td, {
            children: "Predominantly secondary-structure variation"
          })]
        })]
      })]
    }), "\n", _jsx(_components.p, {
      children: "A maximum cannot distinguish Q2, Q3, and Q4. The coordinates can. That is the practical meaning of “one score is not enough.”"
    }), "\n", _jsx(_components.h2, {
      id: "the-05-threshold-is-not-a-constant-of-nature",
      children: "The 0.5 threshold is not a constant of nature"
    }), "\n", _jsx(_components.p, {
      children: "MELO uses 0.5 as the decision boundary on both axes. The number does not come from a physical law. Following the thresholding logic popularized by TM-score, the authors calibrate posterior distributions on very large sets of structure pairs drawn from SCOP2 and CATH. At the SCOP2 class, fold, superfamily, and family levels, the benchmarks contain approximately 0.308, 0.409, 0.411, and 0.413 billion pairs, respectively. The hierarchy acts as a progression from coarse to subtle structural difference."
    }), "\n", _jsx(_components.p, {
      children: "Across these benchmarks, MELO reports accuracy above 99.7% at every level, whereas TM-score declines from 99.8% to 93.8%. Restricting the comparison to pairs above 70% sequence identity makes the contrast larger: MELO remains above 99.9%, while TM-score falls from 96.5% to 62.4%, a gap of more than 30 percentage points at the superfamily and family levels."
    }), "\n", _jsxs(_components.p, {
      children: ["Those numbers are impressive only when read together with their labels. The target is primarily a structural-classification relationship, not an experimentally measured change in enzymatic activity, affinity, or cellular phenotype. The benchmark strongly supports a narrower statement: ", _jsx(_components.strong, {
        children: "MELO is more consistent with this definition of structural difference, especially for subtle differences among sequence-similar proteins."
      }), " It does not establish that every pair crossing 0.5 is functionally consequential."]
    }), "\n", _jsx(_components.h2, {
      id: "three-cases-show-why-both-coordinates-matter",
      children: "Three cases show why both coordinates matter"
    }), "\n", _jsx(_components.h3, {
      id: "ospa-stable-internal-structure-displaced-domains",
      children: "OspA: stable internal structure, displaced domains"
    }), "\n", _jsxs(_components.p, {
      children: ["For an OspA variant involving β-hairpin replacement and shortening, MELO reports ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.13"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "VSS=0.13"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.13"
            })]
          })]
        })]
      }), " and ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.63"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS=0.63"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.63"
            })]
          })]
        })]
      }), ", placing the pair in Q2. Secondary structure is largely preserved while the relative domain arrangement changes; the study reports that TM-score and LDDT do not flag the event. This is the cleanest illustration that internal resemblance and inter-domain motion are different measurements."]
    }), "\n", _jsx(_components.h3, {
      id: "crabp-ii-ligand-binding-changes-both-local-structure-and-pocket-geometry",
      children: "CRABP II: ligand binding changes both local structure and pocket geometry"
    }), "\n", _jsxs(_components.p, {
      children: ["Comparing apo and holo cellular retinoic acid-binding protein II (CRABP II) yields ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.53"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "VSS=0.53"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.53"
            })]
          })]
        })]
      }), " and ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.58"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS=0.58"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.58"
            })]
          })]
        })]
      }), ", a Q3 result. ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "L"
                }), _jsx(_components.mi, {
                  children: "O"
                }), _jsxs(_components.msup, {
                  children: [_jsx(_components.mi, {
                    children: "T"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "V"
                    }), _jsx(_components.mi, {
                      children: "S"
                    }), _jsx(_components.mi, {
                      children: "S"
                    })]
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "PLOT^{VSS}"
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
                height: "0.8413em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "P"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "L"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.02778em"
              },
              children: "O"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.13889em"
                },
                children: "T"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [_jsx(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), _jsx(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: _jsxs(_components.span, {
                            className: "mord mtight",
                            children: [_jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.22222em"
                              },
                              children: "V"
                            }), _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05764em"
                              },
                              children: "SS"
                            })]
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })
        })]
      }), " highlights the second helix and regions near βD and βJ, while ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "L"
                }), _jsx(_components.mi, {
                  children: "O"
                }), _jsxs(_components.msup, {
                  children: [_jsx(_components.mi, {
                    children: "T"
                  }), _jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "S"
                    }), _jsx(_components.mi, {
                      children: "P"
                    }), _jsx(_components.mi, {
                      children: "S"
                    })]
                  })]
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "PLOT^{SPS}"
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
                height: "0.8413em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "P"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              children: "L"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.02778em"
              },
              children: "O"
            }), _jsxs(_components.span, {
              className: "mord",
              children: [_jsx(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.13889em"
                },
                children: "T"
              }), _jsx(_components.span, {
                className: "msupsub",
                children: _jsx(_components.span, {
                  className: "vlist-t",
                  children: _jsx(_components.span, {
                    className: "vlist-r",
                    children: _jsx(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
                      },
                      children: _jsxs(_components.span, {
                        style: {
                          top: "-3.063em",
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
                            className: "mord mtight",
                            children: _jsx(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.05764em"
                              },
                              children: "SPS"
                            })
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })
        })]
      }), " emphasizes displacement involving the second helix and the βE–βF region. The authors connect these patterns to expansion and contraction of the retinoic-acid pocket."]
    }), "\n", _jsx(_components.p, {
      children: "This is where localization earns its keep. A total score says that the structures differ; a spatial map can prioritize residues for mutation, simulation, or experimental follow-up. The map is still evidence of structural difference—not, by itself, a causal mechanism."
    }), "\n", _jsx(_components.h3, {
      id: "kras-alignment-choice-can-change-the-answer",
      children: "KRAS: alignment choice can change the answer"
    }), "\n", _jsxs(_components.p, {
      children: ["The comparison between Mg²⁺-free and Mg²⁺-bound KRAS exposes a sensitive step in the pipeline. With Smith–Waterman sequence alignment establishing residue correspondence, MELO obtains roughly ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.61"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS=0.61"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.61"
            })]
          })]
        })]
      }), " and captures displacement around βB and βC. With US-align structural alignment, some divergent regions are staggered to improve the global superposition, and ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
            })]
          })
        })]
      }), " falls to 0.28."]
    }), "\n", _jsx(_components.p, {
      children: "MELO is therefore not alignment-independent. The authors favor sequence alignment for highly sequence-similar pairs; insertions, deletions, and distant homologues still require judgment about biological correspondence. A tidy decimal score may hide a consequential discrete decision made upstream."
    }), "\n", _jsx(_components.h2, {
      id: "what-does-12562-discovered-changes-actually-mean",
      children: "What does “12,562 discovered changes” actually mean?"
    }), "\n", _jsxs(_components.p, {
      children: ["Starting from 38,128 single-protein PDB structures, the study forms more than two million pairs with sequence identity above 70%. MELO classifies 12,562 pairs as changed, compared with 1,411 identified by TM-score. In Q2, Q3, and Q4, the two methods disagree for 86.45%, 97.23%, and 91.95% of pairs. The authors release these “structural changes missed by existing methods” and report that MELO processes two million pairs in 109 hours, versus 199 hours for TM-score and 1,044 hours for LDDT in their benchmark.", _jsx(_components.sup, {
        children: _jsx(_components.a, {
          href: "#user-content-fn-data",
          id: "user-content-fnref-data",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "3"
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["This is a valuable ", _jsx(_components.strong, {
        children: "candidate set"
      }), ", not 12,562 newly validated functional discoveries. The paper notes that 22.8% of these pairs have different functional annotations; equivalently, 77.2% share the same annotation. Shared annotation does not rule out functional differences, but neither does it prove undiscovered biological effects. A defensible use is to narrow the review space, then combine ligand state, experimental conditions, structure quality, molecular dynamics, and wet-lab evidence to rank candidates."]
    }), "\n", _jsx(_components.h2, {
      id: "four-doubts-worth-keeping",
      children: "Four doubts worth keeping"
    }), "\n", _jsx(_components.h3, {
      id: "1-structural-classification-accuracy-is-not-functional-effect-accuracy",
      children: "1. Structural-classification accuracy is not functional-effect accuracy"
    }), "\n", _jsx(_components.p, {
      children: "SCOP2 and CATH provide scalable labels, not a gold standard for biological effect. If the question is whether a missense variant is pathogenic, MELO can contribute structural evidence but cannot replace stability, binding, expression, or cellular assays."
    }), "\n", _jsx(_components.h3, {
      id: "2-a-fixed-threshold-creates-a-hard-boundary",
      children: "2. A fixed threshold creates a hard boundary"
    }), "\n", _jsxs(_components.p, {
      children: ["The paper supplies a useful counterexample. For the open-to-closed glucokinase comparison, ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
            })]
          })
        })]
      }), " lies around 0.41–0.48, below 0.5 and therefore in Q1, even though the distribution shifts relative to same-state controls. Likewise, global metrics miss the MEF2B D83V change while the local plot reveals the affected helix. Near the boundary, continuous values and local maps deserve more attention than a binary label."]
    }), "\n", _jsxs(_components.h3, {
      id: "3-max-is-simple-but-discards-joint-evidence",
      children: ["3. ", _jsx(_components.code, {
        children: "max"
      }), " is simple but discards joint evidence"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "max"
                }), _jsx(_components.mo, {
                  children: "⁡"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\max(VSS,SPS)"
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
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mop",
              children: "max"
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SS"
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
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " makes ranking easy, but ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mn, {
                  children: "0.8"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mn, {
                  children: "0.1"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "(0.8,0.1)"
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
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.8"
            }), _jsx(_components.span, {
              className: "mpunct",
              children: ","
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.1"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " and ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), _jsx(_components.mn, {
                  children: "0.8"
                }), _jsx(_components.mo, {
                  separator: "true",
                  children: ","
                }), _jsx(_components.mn, {
                  children: "0.8"
                }), _jsx(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "(0.8,0.8)"
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
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), _jsx(_components.span, {
              className: "mopen",
              children: "("
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.8"
            }), _jsx(_components.span, {
              className: "mpunct",
              children: ","
            }), _jsx(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.8"
            }), _jsx(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " receive the same total score. Downstream analyses should preserve both coordinates rather than exporting only MELO-score."]
    }), "\n", _jsx(_components.h3, {
      id: "4-internal-consistency-still-needs-checking",
      children: "4. Internal consistency still needs checking"
    }), "\n", _jsxs(_components.p, {
      children: ["For the SARS-CoV-2 spike example, the paper reports ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "V"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.56"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "VSS=0.56"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "V"
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.56"
            })]
          })]
        })]
      }), " and ", _jsxs(_components.span, {
        className: "katex",
        children: [_jsx(_components.span, {
          className: "katex-mathml",
          children: _jsx(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: _jsxs(_components.semantics, {
              children: [_jsxs(_components.mrow, {
                children: [_jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mi, {
                  children: "P"
                }), _jsx(_components.mi, {
                  children: "S"
                }), _jsx(_components.mo, {
                  children: "="
                }), _jsx(_components.mn, {
                  children: "0.35"
                })]
              }), _jsx(_components.annotation, {
                encoding: "application/x-tex",
                children: "SPS=0.35"
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
                height: "0.6833em"
              }
            }), _jsx(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.05764em"
              },
              children: "SPS"
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
                height: "0.6444em"
              }
            }), _jsx(_components.span, {
              className: "mord",
              children: "0.35"
            })]
          })]
        })]
      }), ". Under its stated thresholds, that is Q4; the figure caption also calls it Q4, while one sentence in the main text says Q3. This article does not silently correct the authors. It records the inconsistency and interprets the numbers using the explicit decision rule."]
    }), "\n", _jsx(_components.h2, {
      id: "when-is-melo-worth-using",
      children: "When is MELO worth using?"
    }), "\n", _jsx(_components.p, {
      children: "MELO is less about asking whether two proteins share a fold and more useful in these settings:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "comparing apo/holo structures, ion-binding states, or environmental conditions;"
      }), "\n", _jsx(_components.li, {
        children: "testing whether missense mutations, short indels, or engineered variants create local changes;"
      }), "\n", _jsx(_components.li, {
        children: "screening large collections of sequence-similar structure pairs for candidates worthy of inspection;"
      }), "\n", _jsx(_components.li, {
        children: "tracing an aggregate difference back to residues, secondary structures, or domain relationships."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "A practical analysis sequence is: inspect structure quality and missing residues. MELO models missing residues and incomplete side chains, so identify which coordinates were repaired because they may affect local geometric features and VSS. Then verify that the alignment reflects biological correspondence; report VSS, SPS, and the quadrant rather than only the maximum; inspect both local plots; and finally test the structural hypothesis against experimental conditions, annotations, and independent evidence."
    }), "\n", _jsxs(_components.p, {
      children: ["MELO does not make RMSD, TM-score, or LDDT obsolete. These methods answer questions at different scales. Its most reusable design lesson is that, for subtle structural variation, ", _jsx(_components.strong, {
        children: "measuring magnitude, distinguishing the type of change, and locating the altered region"
      }), " are related tasks that should not be collapsed into a single number."]
    }), "\n", _jsx(_components.h2, {
      id: "resources",
      children: "Resources"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://www.nature.com/articles/s41467-025-68110-8",
          children: "Original paper"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://pubmed.ncbi.nlm.nih.gov/41490886/",
          children: "PubMed record"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://melo.idrblab.cn/",
          children: "MELO web server"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/idrblab/MELO",
          children: "Source code and installation"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://doi.org/10.5281/zenodo.17360644",
          children: "Zenodo archive"
        })
      }), "\n"]
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
            children: ["Zheng, L. et al. “Measuring and locating the changes in protein structure using MELO.” ", _jsx(_components.em, {
              children: "Nature Communications"
            }), " 17, 1360 (2026). DOI: ", _jsx(_components.a, {
              href: "https://doi.org/10.1038/s41467-025-68110-8",
              children: "10.1038/s41467-025-68110-8"
            }), ". ", _jsx(_components.a, {
              href: "#user-content-fnref-paper",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              className: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", _jsxs(_components.li, {
          id: "user-content-fn-dssp-fields",
          children: ["\n", _jsxs(_components.p, {
            children: ["For the DSSP method, see Kabsch, W. & Sander, C. “Dictionary of protein secondary structure: pattern recognition of hydrogen-bonded and geometrical features.” ", _jsx(_components.em, {
              children: "Biopolymers"
            }), " 22, 2577–2637 (1983). DOI: ", _jsx(_components.a, {
              href: "https://doi.org/10.1002/bip.360221211",
              children: "10.1002/bip.360221211"
            }), ". ", _jsx(_components.a, {
              href: "#user-content-fnref-dssp-fields",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
              className: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", _jsxs(_components.li, {
          id: "user-content-fn-data",
          children: ["\n", _jsxs(_components.p, {
            children: ["Runtime figures come from the paper's Data availability section and reflect the authors' benchmark; they should not be extrapolated directly across hardware, parallelization settings, or sequence lengths. ", _jsx(_components.a, {
              href: "#user-content-fnref-data",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3",
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
