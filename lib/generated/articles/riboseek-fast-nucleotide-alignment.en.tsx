// @ts-nocheck
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    math: "math",
    mi: "mi",
    mo: "mo",
    mrow: "mrow",
    ol: "ol",
    p: "p",
    section: "section",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    sup: "sup",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Paper brief"
        }), ": In this bioRxiv preprint, Park et al. introduce Riboseek, a remote homology search and alignment tool for RNA and DNA. It combines overlapping di-mer encoding with a staged search pipeline to retrieve homologs from large databases and generate multiple sequence alignments (MSAs) for RNA structure prediction. The central question is how well it balances speed, sensitivity, and alignment quality.", _jsx(_components.sup, {
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
      id: "the-bottleneck-often-comes-before-model-inference",
      children: "The bottleneck often comes before model inference"
    }), "\n", _jsx(_components.p, {
      children: "AlphaFold 3 and Protenix-v2 can predict biomolecular structures that include RNA, but their performance also depends on the information supplied. Alongside the query sequence, an MSA can provide covariation signals associated with shared structural constraints. Obtaining that information often requires searching for remote homologs in large databases such as RNAcentral and NT—a step that can take longer than model inference itself."
    }), "\n", _jsx(_components.p, {
      children: "Existing tools offer different tradeoffs:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "BLASTN is fast, but its reliance on local seed matches can miss distant homologs with low sequence similarity."
      }), "\n", _jsx(_components.li, {
        children: "nhmmer uses profile hidden Markov models (profile HMMs) to improve sensitivity, at greater computational cost."
      }), "\n", _jsx(_components.li, {
        children: "Infernal uses covariance models to incorporate RNA secondary structure and sequence covariation, adding further cost."
      }), "\n", _jsx(_components.li, {
        children: "rMSA combines multiple search methods with structure-aware filtering to produce high-quality alignments, but searches of large databases can take days."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Here, “sensitivity” means homology-detection sensitivity: the ability to recover remote homologs when they are actually present in the database."
    }), "\n", _jsx(_components.h2, {
      id: "riboseeks-core-preserving-local-context-with-di-mers",
      children: "Riboseek's core: preserving local context with di-mers"
    }), "\n", _jsx(_components.p, {
      children: "Conventional nucleotide aligners typically encode individual bases. Riboseek instead encodes each pair of adjacent nucleotides as a di-mer."
    }), "\n", _jsx(_components.p, {
      children: "In addition to 16 canonical di-mers, Riboseek uses eight wildcard di-mers that allow one position to remain unspecified. These handle sequence ends and ambiguous or noncanonical nucleotides. Uracil and thymine use the same mapping, allowing this representation to work for both RNA and DNA."
    }), "\n", _jsxs("div", {
      className: "article-figure",
      children: [_jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "/AIxBio/images/riboseek/fig1.png",
          alt: "Riboseek di-mer encoding"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.em, {
          children: "Riboseek encodes the query as overlapping di-mers."
        })
      })]
    }), "\n", _jsx(_components.h3, {
      id: "how-does-a-query-become-a-searchable-profile",
      children: "How does a query become a searchable profile?"
    }), "\n", _jsx(_components.p, {
      children: "Rfam contains RNA families and their sequence alignments. The authors use these curated alignments to count di-mer pairs occurring in the same alignment columns, then compare their observed frequencies with background expectations to calculate log-odds substitution scores. Pairs that occur more often than expected receive higher scores; those that occur less often receive lower scores."
    }), "\n", _jsx(_components.p, {
      children: "During a search, Riboseek encodes the query as a series of di-mers with a stride of one nucleotide. The substitution matrix then scores each query di-mer against the possible target di-mers. Arranged along the query, these scores form a position-specific scoring matrix (PSSM), or query profile. Both the prefilter and subsequent Smith–Waterman–Gotoh alignment use this profile for scoring."
    }), "\n", _jsx(_components.p, {
      children: "Target sequences may have the same orientation as the query or be reverse complements, so Riboseek builds forward and reverse-complement query profiles and searches the target database with each. To construct the reverse-complement profile, Riboseek scores each target di-mer as its reverse complement; for example, AC is scored as GU in RNA and GT in DNA. In later iterations, hits from the previous round are assembled into a query-centered MSA and used to update the profile, allowing the next search round to use position-specific information from the homologs already found."
    }), "\n", _jsxs("div", {
      className: "article-figure",
      children: [_jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "/AIxBio/images/riboseek/fig2.png",
          alt: "Di-mer substitution matrix and query profile construction"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.em, {
          children: "The di-mer substitution matrix supplies scores at each query position to form a searchable profile."
        })
      })]
    }), "\n", _jsx(_components.p, {
      children: "To limit data leakage, the authors used the training set to estimate the di-mer substitution matrix, the validation set to optimize search parameters, and the test set to compare performance. They started from seed alignments for 4,170 Rfam 14.10 families, reduced redundancy at an 80% sequence-identity threshold, and split the families by Rfam clan so that no clan appeared in more than one set. In the final split, 143 families were used for parameter optimization and 155 for independent testing."
    }), "\n", _jsx(_components.h3, {
      id: "how-does-riboseek-search-a-database",
      children: "How does Riboseek search a database?"
    }), "\n", _jsx(_components.p, {
      children: "Once the profile is built, Riboseek selects and refines results in four stages:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Prefiltering"
        }), ": a k-mer prefilter or GPU-accelerated ungapped prefilter quickly identifies candidates that share local features with the query profile, reducing the number of sequences requiring detailed alignment."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Candidate alignment"
        }), ": Smith–Waterman–Gotoh local alignment evaluates candidates using affine gap penalties, which score gap opening and extension separately and allow insertions and deletions within local matches."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Iterative search"
        }), ": hits are organized into a query-centered MSA and used to update the profile for the next round, improving the recovery of remote homologs."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Structure-aware realignment (optional)"
        }), ": for RNA, the MSA and an RNAfold-predicted secondary structure can be used to build a covariance model. Infernal's CYK algorithm then realigns the hits with base-pairing constraints."]
      }), "\n"]
    }), "\n", _jsxs("div", {
      className: "article-figure",
      children: [_jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "/AIxBio/images/riboseek/fig3.png",
          alt: "Riboseek prefiltering, local alignment, iterative search, and structure-aware realignment workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.em, {
          children: "The Riboseek search pipeline, with optional structure-aware realignment."
        })
      })]
    }), "\n", _jsx(_components.h2, {
      id: "how-sensitive-is-the-search-and-how-reliable-are-the-alignments",
      children: "How sensitive is the search, and how reliable are the alignments?"
    }), "\n", _jsx(_components.h3, {
      id: "1-remote-homology-detection-and-search-speed",
      children: "1. Remote-homology detection and search speed"
    }), "\n", _jsx(_components.p, {
      children: "The authors selected 71 Rfam test families with more than 20 members and used the longest sequence in each family as the query. Same-family sequences were treated as true positives; sequences from different clans and controls generated by randomly shuffling the bases in real sequences were treated as false positives; sequences from other families in the same clan were excluded from the evaluation. The target database contained 96,701 sequences. Random pseudogenomic segments 100–1,000 nt long were added to both ends of each target to simulate homologous regions embedded in longer genomic sequences."
    }), "\n", _jsx(_components.p, {
      children: "The main metric was ROC1-AUC: the fraction of all true positives ranked before the first false positive. The horizontal axis shows the ROC1-AUC threshold, and the vertical axis shows the fraction of queries that reach it. Colors and symbols distinguish the tools, while marker styles indicate the number of search rounds."
    }), "\n", _jsxs("div", {
      className: "article-figure",
      children: [_jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "/AIxBio/images/riboseek/fig4.png",
          alt: "ROC1-AUC distributions for different tools and search rounds on the Rfam benchmark"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.em, {
          children: "ROC1-AUC distributions for different tools and search rounds on the Rfam benchmark. For a given tool, curves closer to the upper right indicate stronger overall homology recovery."
        })
      })]
    }), "\n", _jsx(_components.p, {
      children: "In a single search round, Infernal had the highest sensitivity, followed by Riboseek, which outperformed nhmmer, Smith–Waterman, and BLASTN. Sensitivity increased as Riboseek, Infernal, and nhmmer updated their profiles over successive rounds. After two profile updates, Riboseek outperformed nhmmer across most thresholds and exceeded single-pass Infernal, but remained below iterative Infernal."
    }), "\n", _jsx(_components.p, {
      children: "Precision–recall curves address a complementary question: how many false positives accompany the recovery of additional homologs? Riboseek performed better overall than nhmmer, Smith–Waterman, and BLASTN, but its precision fell as recall increased. Infernal generally maintained higher precision at higher recall."
    }), "\n", _jsx(_components.p, {
      children: "To compare runtime, the authors searched RNAcentral v26 with the same queries. GPU Riboseek completed its first round in under two minutes: 544 times faster than nhmmer and 777 times faster than Infernal, while taking 2.9 times as long as BLASTN. The CPU version used k-mer prefiltering and completed the same search in about 30 minutes, 37 times faster than nhmmer and 53 times faster than Infernal."
    }), "\n", _jsxs("div", {
      className: "article-figure",
      children: [_jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "/AIxBio/images/riboseek/fig5.png",
          alt: "Rfam precision–recall curves and RNAcentral search runtimes"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.em, {
          children: "Precision–recall curves show the tradeoff between recovery and false positives; the inset compares RNAcentral search times for the same queries."
        })
      })]
    }), "\n", _jsx(_components.p, {
      children: "The DNA benchmark used 150 Dfam families, treating family members as true positives and controls generated by randomly shuffling their bases as false positives. Both ROC1-AUC and precision–recall curves showed stronger remote-homology detection for Riboseek than for BLASTN, nhmmer, and pairwise Smith–Waterman alignment."
    }), "\n", _jsxs("div", {
      className: "article-figure",
      children: [_jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "/AIxBio/images/riboseek/fig6.png",
          alt: "Dfam DNA benchmark ROC1-AUC distributions and precision–recall curves"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.em, {
          children: "Homology detection on the Dfam benchmark: ROC1-AUC distributions on the left and precision–recall curves on the right."
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["The statistical significance of search results also depends on E-value calibration. The authors sampled a separate set of 9,857 RNAcentral sequences and generated shuffled sequences as controls without true homology. With well-calibrated E-values, a threshold of ", _jsxs(_components.span, {
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
      }), " should yield about ", _jsxs(_components.span, {
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
      }), " random hits per query on average. Riboseek and BLASTN were close to this expectation; nhmmer reported fewer random hits, indicating more conservative E-value estimates."]
    }), "\n", _jsxs("div", {
      className: "article-figure",
      children: [_jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "/AIxBio/images/riboseek/fig7.png",
          alt: "Theoretical E-value thresholds versus mean random hits per query"
        })
      }), _jsx(_components.p, {
        children: _jsxs(_components.em, {
          children: ["E-value calibration: proximity to the dashed line ", _jsxs(_components.span, {
            className: "katex",
            children: [_jsx(_components.span, {
              className: "katex-mathml",
              children: _jsx(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: _jsxs(_components.semantics, {
                  children: [_jsxs(_components.mrow, {
                    children: [_jsx(_components.mi, {
                      children: "y"
                    }), _jsx(_components.mo, {
                      children: "="
                    }), _jsx(_components.mi, {
                      children: "x"
                    })]
                  }), _jsx(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "y=x"
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
                    height: "0.625em",
                    verticalAlign: "-0.1944em"
                  }
                }), _jsx(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.03588em"
                  },
                  children: "y"
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
                    height: "0.4306em"
                  }
                }), _jsx(_components.span, {
                  className: "mord mathnormal",
                  children: "x"
                })]
              })]
            })]
          }), " indicates agreement between reported E-values and observed random-hit counts."]
        })
      })]
    }), "\n", _jsx(_components.h3, {
      id: "2-do-the-msas-preserve-secondary-structure-signals",
      children: "2. Do the MSAs preserve secondary-structure signals?"
    }), "\n", _jsx(_components.p, {
      children: "Beyond detecting homologs, an MSA must preserve covariation signals related to RNA structure. For the secondary-structure experiment, the authors extracted reference base pairs from the experimental structures of 361 non-redundant RNA chains. Because rMSA failed to generate MSAs for 15 queries within 30 days, the final evaluation covered the remaining 346 queries."
    }), "\n", _jsx(_components.p, {
      children: "All tools searched RNAcentral v26 and NT. Their MSAs were passed to R-scape and plmc to predict base pairs, and F1 scores were calculated against the experimental references. This design tests the structural information preserved in an MSA, beyond the number of sequences it contains."
    }), "\n", _jsxs("div", {
      className: "article-figure",
      children: [_jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "/AIxBio/images/riboseek/fig8.png",
          alt: "Base-pair prediction F1 distributions for R-scape and plmc, with MSA generation runtimes"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.em, {
          children: "Secondary-structure evaluation with R-scape (left) and plmc (right). Curves show the fraction of queries exceeding each F1 threshold; the inset reports MSA generation times."
        })
      })]
    }), "\n", _jsx(_components.p, {
      children: "rMSA achieved the highest overall base-pair prediction F1 scores with both methods. CYK-based structure-aware realignment substantially improved Riboseek's scores, bringing them closer to rMSA without surpassing it overall. Adding CYK realignment, however, increased MSA generation time by about 13-fold. The improvement from CYK also shows that alignment choices directly affect downstream analysis."
    }), "\n", _jsx(_components.h2, {
      id: "173-million-precomputed-rna-msas",
      children: "1.73 million precomputed RNA MSAs"
    }), "\n", _jsx(_components.p, {
      children: "The authors downloaded all sequences from RNAcentral Release 25, removed sequences containing gaps or nonstandard nucleotides, and deduplicated the remainder. They then used EternaFold to predict the secondary structure of each sequence, retaining only sequences shorter than 600 nt in which at least 60% of nucleotides were predicted to participate in base pairing. Riboseek generated MSAs for the 1,731,677 RNA sequences that met these criteria."
    }), "\n", _jsx(_components.p, {
      children: "For comparison, the RNAcentral and Rfam MSA collections released with OpenFold3 cover 126,778 RNA sequences. Measured by the number of RNAs covered, the Riboseek collection is about 13.7 times larger."
    }), "\n", _jsx(_components.h2, {
      id: "strengths-and-limitations",
      children: "Strengths and limitations"
    }), "\n", _jsx(_components.p, {
      children: "Riboseek's main contribution is an integrated tool that combines di-mer encoding, fast prefiltering, local alignment, and iterative search on CPUs or GPUs, substantially reducing the time required for large-scale nucleotide homology search. The evaluation examines sensitivity, precision–recall behavior, E-value calibration, runtime, and secondary-structure signals. The Rfam data were split by clan so that families from the same clan did not appear in both the training and test sets. The precomputed MSAs also provide a reusable data resource."
    }), "\n", _jsx(_components.p, {
      children: "Several boundaries matter when interpreting these results. Rfam and Dfam benchmarks rely on curated family labels and shuffled negatives, which cannot fully represent unannotated or ambiguous homology relationships in real databases. Higher recall still brings more false positives, so search thresholds need to reflect the task. Structure-aware realignment improves Riboseek's MSAs substantially, but a gap remains relative to rMSA in the secondary-structure evaluation."
    }), "\n", _jsx(_components.p, {
      children: "Riboseek's most notable contribution is the efficiency it brings to large-scale search. In practice, search time, hit reliability, and MSA quality must be weighed together."
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
            children: ["Park, S. et al. “Fast remote nucleotide sequence alignment with Riboseek.” ", _jsx(_components.em, {
              children: "bioRxiv"
            }), ", 2026.07.31.741718v1. DOI: ", _jsx(_components.a, {
              href: "https://doi.org/10.64898/2026.07.31.741718",
              children: "10.64898/2026.07.31.741718"
            }), ". This is a preprint that has not yet undergone peer review. ", _jsx(_components.a, {
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
