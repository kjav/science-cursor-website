import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserModel } from '../models/user-model';
import { ThesisModel } from '../models/thesis-model';
import { PaperModel } from '../models/paper-model';
import { PaperRatingModel} from '../models/paper-rating-model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users: UserModel[] = [
      {id: 0, name: 'ArctisDriver', roles: ['admin']},
      {id: 1, name: 'RubberDiver' , roles: ['admin', 'moderator']},
      {id: 2, name: 'ClearFaxx'   , roles: ['moderator']},
      {id: 3, name: 'GeorgeB'     , roles: []},
      {id: 4, name: 'KingNewman'  , roles: []},
      {id: 5, name: 'Rasta89'     , roles: []},
      {id: 6, name: 'CoolShawn'   , roles: []},
      {id: 7, name: 'BadBlood45'  , roles: []},
      {id: 8, name: 'Amenisties'  , roles: []},
      {id: 9, name: 'RougeGirl'   , roles: []},
    ];

    let theses: ThesisModel[] = [
      { id: 0,
        title: 'Earth is flat',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        status: 1, modComment: 'The thesis do not provide an intial paper with strong enough evidence',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 1, 10),
        validating: [], invalidating: []},
      { id: 1,
        title: 'Teleportation is possible',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        status: 2, modComment: 'The formulation of the title is offensive. Please rephrase it to be less conflictual.',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 2, 11),
        validating: [], invalidating: []},
      { id: 2,
        title: 'Glyphosate causes cancer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 3, 12),
        validating: [], invalidating: []},
      { id: 3,
        title: 'Human activities cause climate change',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 4, 13),
        validating: [], invalidating: []},
      { id: 4,
        title: 'Homeopathic drugs can replace vaccins',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 5, 14),
        validating: [], invalidating: []},
      { id: 5,
        title: 'Vaccins causes autism',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 6, 15),
        validating: [], invalidating: []},
      { id: 6,
        title: 'Pluto is a planet',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 7, 16),
        validating: [], invalidating: []},
      { id: 7,
        title: 'Gravitational waves exist',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 8, 17),
        validating: [], invalidating: []},
      { id: 8,
        title: 'Time travel is possible',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 9, 18),
        validating: [], invalidating: []},
      { id: 9,
        title: 'Running under the rain make you more wet than walking',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 10, 19),
        validating: [], invalidating: []},
    ];

    let papers: PaperModel[] = [
      { id: 0,
        title: 'School performance, social networking effects, and learning of school children: Evidence of reciprocal relationships in Abu Dhabi',
        abstract: 'This study uses structural equations modeling to test a hypothetical social network model with applications to a sample of 34,896 school children in Abu Dhabi. The main independent constructs in the model are related to children’s attitude with regard to social networking, reasons for using social networks, things done on social networks, and topics used. The dependent constructs cover perceived school performance and social effects of social networking. The study will describe the relations among the various constructs. The effect of other variables, such as parental knowhow, is also investigated. Our work has improved our insight in the social networking model. Results support the idea of reciprocal relations among perceived performance, learning from social networking, and the effect of social networking. Evidence for a model that includes opposite pathways implies that the problem of social networking constructs, its antecedents, and possible consequences should be examined with caution.',
        authors: ['Masood Badri', 'Ali Al Nuaimi', 'Yang Guang', 'Asma Al Rashedi'],
        publishedIn: 'Telematics and Informatics, Volume 34, Issue 8',
        publicationDate: new Date(2017, 12),
        link: 'https://www.sciencedirect.com/science/article/pii/S0736585317302769',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 1, 20),
        ratings: []},
      { id: 1,
        title: 'Aluminium in brain tissue in autism',
        abstract: 'Autism spectrum disorder is a neurodevelopmental disorder of unknown aetiology. It is suggested to involve both genetic susceptibility and environmental factors including in the latter environmental toxins. Human exposure to the environmental toxin aluminium has been linked, if tentatively, to autism spectrum disorder. Herein we have used transversely heated graphite furnace atomic absorption spectrometry to measure, for the first time, the aluminium content of brain tissue from donors with a diagnosis of autism. We have also used an aluminium-selective fluor to identify aluminium in brain tissue using fluorescence microscopy. The aluminium content of brain tissue in autism was consistently high. The mean (standard deviation) aluminium content across all 5 individuals for each lobe were 3.82(5.42), 2.30(2.00), 2.79(4.05) and 3.82(5.17) μg/g dry wt. for the occipital, frontal, temporal and parietal lobes respectively. These are some of the highest values for aluminium in human brain tissue yet recorded and one has to question why, for example, the aluminium content of the occipital lobe of a 15 year old boy would be 8.74 (11.59) μg/g dry wt.? Aluminium-selective fluorescence microscopy was used to identify aluminium in brain tissue in 10 donors. While aluminium was imaged associated with neurones it appeared to be present intracellularly in microglia-like cells and other inflammatory non-neuronal cells in the meninges, vasculature, grey and white matter. The pre-eminence of intracellular aluminium associated with non-neuronal cells was a standout observation in autism brain tissue and may offer clues as to both the origin of the brain aluminium as well as a putative role in autism spectrum disorder.',
        authors: ['Matthew Mold', 'Dorcas Umar', 'Andrew King', 'ChristopherExley'],
        publishedIn: 'Journal of Trace Elements in Medicine and Biology, Volume 46',
        publicationDate: new Date(2018, 3),
        link: 'https://www.sciencedirect.com/science/article/pii/S0946672X17308763',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 2, 19),
        ratings: []},
      { id: 2,
        title: 'The wood from the trees: The use of timber in construction',
        abstract: 'Trees, and their derivative products, have been used by societies around the world for thousands of years. Contemporary construction of tall buildings from timber, in whole or in part, suggests a growing interest in the potential for building with wood at a scale not previously attainable. As wood is the only significant building material that is grown, we have a natural inclination that building in wood is good for the environment. But under what conditions is this really the case? The environmental benefits of using timber are not straightforward; although it is a natural product, a large amount of energy is used to dry and process it. Much of this can come from the biomass of the tree itself, but that requires investment in plant, which is not always possible in an industry that is widely distributed among many small producers. And what should we build with wood? Are skyscrapers in timber a good use of this natural resource, or are there other aspects of civil and structural engineering, or large-scale infrastructure, that would be a better use of wood? Here, we consider a holistic picture ranging in scale from the science of the cell wall to the engineering and global policies that could maximise forestry and timber construction as a boon to both people and the planet.',
        authors: ['Michael H. Ramagea', 'Henry Burridge', 'Marta Busse-Wicher', 'George Fereday', 'Thomas Reynolds', 'Darshil U. Shah', 'Guanglu Wu', 'LiYu', 'Patrick Fleming', 'Danielle Densley-Tingley', 'Julian Allwood', 'Paul Dupree', 'P.F. Linden', 'Oren Scherman'],
        publishedIn: 'Renewable and Sustainable Energy Reviews, Volume 68, Part 1',
        publicationDate: new Date(2017, 2),
        link: 'https://www.sciencedirect.com/science/article/pii/S1364032116306050',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 3, 18),
        ratings: []},
      { id: 3,
        title: 'A Complete Electron Microscopy Volume of the Brain of Adult Drosophila melanogaster',
        abstract: 'Drosophila melanogaster has a rich repertoire of innate and learned behaviors. Its 100,000-neuron brain is a large but tractable target for comprehensive neural circuit mapping. Only electron microscopy (EM) enables complete, unbiased mapping of synaptic connectivity; however, the fly brain is too large for conventional EM. We developed a custom high-throughput EM platform and imaged the entire brain of an adult female fly at synaptic resolution. To validate the dataset, we traced brain-spanning circuitry involving the mushroom body (MB), which has been extensively studied for its role in learning. All inputs to Kenyon cells (KCs), the intrinsic neurons of the MB, were mapped, revealing a previously unknown cell type, postsynaptic partners of KC dendrites, and unexpected clustering of olfactory projection neurons. These reconstructions show that this freely available EM volume supports mapping of brain-spanning circuits, which will significantly accelerate Drosophila neuroscience.',
        authors: ['Zhihao Zheng', 'J. Scott Lauritzen', 'Eric Perlman', 'Camenzind G. Robinson', 'Matthew Nichols', 'Daniel Milkie', 'Omar Torrens', 'John Price', 'Corey B. Fisher', 'Nadiya Sharifi', 'Steven A. Calle-Schuler', 'Lucia Kmecova', 'Iqbal J. Ali', 'Bill Karsh', 'Eric T. Trautman', 'John A. Bogovic', 'Philipp Hanslovsky', 'Gregory S.X.E. Jefferis', 'Davi D.Bock'],
        publishedIn: 'Cell, Volume 174, Issue 3',
        publicationDate: new Date(2018, 7),
        link: 'https://www.sciencedirect.com/science/article/pii/S0092867418307876',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 4, 17),
        ratings: []},
      { id: 4,
        title: 'Comprehensive Characterization of Cancer Driver Genes and Mutations',
        abstract: 'Identifying molecular cancer drivers is critical for precision oncology. Multiple advanced algorithms to identify drivers now exist, but systematic attempts to combine and optimize them on large datasets are few. We report a PanCancer and PanSoftware analysis spanning 9,423 tumor exomes (comprising all 33 of The Cancer Genome Atlas projects) and using 26 computational tools to catalog driver genes and mutations. We identify 299 driver genes with implications regarding their anatomical sites and cancer/cell types. Sequence- and structure-based analyses identified >3,400 putative missense driver mutations supported by multiple lines of evidence. Experimental validation confirmed 60%–85% of predicted mutations as likely drivers. We found that >300 MSI tumors are associated with high PD-1/PD-L1, and 57% of tumors analyzed harbor putative clinically actionable events. Our study represents the most comprehensive discovery of cancer genes and mutations to date and will serve as a blueprint for future biological and clinical endeavors.',
        authors: ['Matthew H. Bailey', 'Collin Tokheim', 'EduardP orta-Pardo', 'Sohini Sengupta', 'Denis Bertrand', 'Amila Weerasinghe', 'Antonio Colaprico', 'Michael C. Wendl', 'Jaegil Kim', 'Brendan Reardon', 'Patrick Kwok-Shing Ng', 'Kang Jin Jeong', 'Song Cao', 'Zixing Wang', 'Jianjiong Gao', 'Qingsong Gao', 'Fang Wang', 'Eric Minwei Liu', 'Li Ding'],
        publishedIn: 'Cell, Volume 173, Issue 2',
        publicationDate: new Date(2018, 4),
        link: 'https://www.sciencedirect.com/science/article/pii/S009286741830237X',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 5, 16),
        ratings: []},
      { id: 5,
        title: 'Hallmarks of Cancer: The Next Generation',
        abstract: 'The hallmarks of cancer comprise six biological capabilities acquired during the multistep development of human tumors. The hallmarks constitute an organizing principle for rationalizing the complexities of neoplastic disease. They include sustaining proliferative signaling, evading growth suppressors, resisting cell death, enabling replicative immortality, inducing angiogenesis, and activating invasion and metastasis. Underlying these hallmarks are genome instability, which generates the genetic diversity that expedites their acquisition, and inflammation, which fosters multiple hallmark functions. Conceptual progress in the last decade has added two emerging hallmarks of potential generality to this list—reprogramming of energy metabolism and evading immune destruction. In addition to cancer cells, tumors exhibit another dimension of complexity: they contain a repertoire of recruited, ostensibly normal cells that contribute to the acquisition of hallmark traits by creating the “tumor microenvironment.” Recognition of the widespread applicability of these concepts will increasingly affect the development of new means to treat human cancer.',
        authors: ['Douglas Hanahan', 'Robert A. Weinberg'],
        publishedIn: 'Cell, Volume 144, Issue 5',
        publicationDate: new Date(2011, 3),
        link: 'https://www.sciencedirect.com/science/article/pii/S0092867411001279',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 6, 15),
        ratings: []},
      { id: 6,
        title: 'A randomized lot-to-lot immunogenicity consistency study of the candidate zoster vaccine HZ/su',
        abstract: 'The risk of developing herpes zoster (HZ) increases with age and is thought to be associated with a decrease in cell-mediated immunity in older adults. The adjuvanted varicella-zoster virus (VZV) glycoprotein E (gE) recombinant subunit vaccine (HZ/su) showed >90% efficacy in the prevention of HZ when administered in adults ≥50 years of age. Here we aim to evaluate immunogenicity consistency of 3 different HZ/su vaccine lots and to assess safety of these lots.',
        authors: ['Ana Strezova', 'Olivier Godeaux', 'Naresh Aggarwal', 'Geert Leroux-Roels', 'Marta Lopez-Fauqued', 'Pierre Van Damme', 'Carline Vanden Abeele', 'Ilse Vastiaua', 'Thomas C. Heineman', 'Himal Lal'],
        publishedIn: 'Vaccine, Volume 35, Issue 48, Part B',
        publicationDate: new Date(2017, 12),
        link: 'https://www.sciencedirect.com/science/article/pii/S0264410X17313968',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 7, 14),
        ratings: []},
      { id: 7,
        title: 'Echinococcus across the north: Current knowledge, future challenges',
        abstract: 'Zoonotic Echinococcus spp. cestodes are present in almost all circumpolar nations, and have historically posed a risk to health of indigenous as well as other northern residents. However, surveillance data on both alveolar (AE) and cystic (CE) echinococcosis remains incomplete throughout the circumpolar region: Russia, Fennoscandia, Iceland, Greenland, Canada and Alaska (USA). Prevalence of Echinococcus spp. varies considerably in definitive canid hosts, animal intermediate hosts and accidental hosts like humans. Yet despite the high prevalence reported in canids in some geographic locations, human AE and CE are much less common than in endemic Asian and central European countries. This paper explores knowledge gaps and future challenges posed by Echinococcus spp. in eight circumpolar countries, a region where rapid environmental and social change are rewriting the boundaries, transmission, and impact of many pathogens, including zoonotic Echinococcus spp.',
        authors: ['Rebecca K. Davidson', 'Antti Lavikainen', 'Sergey Konyaev', 'Janna Schurer', 'Andrea L. Miller', 'Antti Oksanen', 'Karl Skírnisson', 'Emily Jenkins'],
        publishedIn: 'Food and Waterborne Parasitology, Volume 4',
        publicationDate: new Date(2016, 9),
        link: 'https://www.sciencedirect.com/science/article/pii/S2405676616300130',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 8, 13),
        ratings: []},
      { id: 8,
        title: 'Initial formation of corrosion products on pure zinc in saline solution',
        abstract: 'Corrosion product formed on zinc sample during 2 weeks immersion in saline solution has been investigated. The corrosion layer morphology as well as its chemical composition, was analyzed using scanning electron microscopy (SEM), x-ray diffraction (XRD), x-ray photoelectron spectroscopy (XPS) and Fourier transform infrared spectroscopy (FTIR). Electrochemical measurement was used to analyze the corrosion behavior. Zinc oxide, zinc hydroxide and zinc hydroxide chloride were formed on zinc surface in saline solution. The thickness of corrosion layer increased with the time increased. The pure Zn has an estimated corrosion rate of 0.063 mm y−1 after immersion for 336 h. Probable mechanisms of zinc corrosion products formation are presented.',
        authors: ['Yao Meng', 'Lijun Liu', 'Dawei Zhang', 'Chaofang Dongb', 'Yu Yan', 'Alex A. Volinsky', 'Lu-Ning Wang'],
        publishedIn: 'Bioactive Materials',
        publicationDate: new Date(2018, 11),
        link: 'https://www.sciencedirect.com/science/article/pii/S2452199X18300240',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 9, 12),
        ratings: []},
      { id: 9,
        title: 'Creating a cluster type partnerships between academics and professionals',
        abstract: 'In this work the perspectives of interaction between educational institutions and employers in Russian mono-cities is discussed. The possibility of using cluster approach in the development of academic and professional partnership is proved. The design expertise of cluster environment is shown through the example of Arseniev the mono-city of Far Eastern Federal District. The structure of academic and manufacturing cluster is presented, and the mechanism of its subjects interaction is described.',
        authors: ['Nelly Klescheva'],
        publishedIn: 'Pacific Science Review, Volume 16, Issue 4',
        publicationDate: new Date(2014, 12),
        link: 'https://www.sciencedirect.com/science/article/pii/S1229545015200149',
        status: 0, modComment: '',
        cursor: 0,
        createdBy: 0, creationDate: new Date(2018, 10, 11),
        ratings: []},
    ];

    let paperRatings: PaperRatingModel[] = [
      { id: 0,
        status: 0,
        modComment: '',
        createdBy: 0,
        creationDate: new Date(2018, 12, 25),
        cursor: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        votes: []},
      { id: 1,
        status: 0,
        modComment: '',
        createdBy: 0,
        creationDate: new Date(2018, 11, 24),
        cursor: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        votes: []},
      { id: 2,
        status: 0,
        modComment: '',
        createdBy: 0,
        creationDate: new Date(2018, 10, 23),
        cursor: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        votes: []},
      { id: 3,
        status: 0,
        modComment: '',
        createdBy: 0,
        creationDate: new Date(2018, 9, 22),
        cursor: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        votes: []},
      { id: 4,
        status: 0,
        modComment: '',
        createdBy: 0,
        creationDate: new Date(2018, 8, 21),
        cursor: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        votes: []},
      { id: 5,
        status: 0,
        modComment: '',
        createdBy: 0,
        creationDate: new Date(2018, 7, 20),
        cursor: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        votes: []},
      { id: 6,
        status: 0,
        modComment: '',
        createdBy: 0,
        creationDate: new Date(2018, 6, 19),
        cursor: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        votes: []},
      { id: 7,
        status: 0,
        modComment: '',
        createdBy: 0,
        creationDate: new Date(2018, 5, 18),
        cursor: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        votes: []},
      { id: 8,
        status: 0,
        modComment: '',
        createdBy: 0,
        creationDate: new Date(2018, 4, 17),
        cursor: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        votes: []},
      { id: 9,
        status: 0,
        modComment: '',
        createdBy: 0,
        creationDate: new Date(2018, 3, 16),
        cursor: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum felis ut, ornare felis. Sed orci diam, dictum vitae justo ac, lobortis venenatis libero. Praesent sit amet tortor lectus. Vestibulum bibendum nec massa eget feugiat. Quisque libero dui, volutpat in neque ut, tristique varius massa. Sed elementum urna et elit interdum porta. Etiam metus enim, iaculis in vulputate id, blandit nec ipsum. Maecenas sed nisi porttitor, volutpat nibh sit amet, scelerisque nisi. Pellentesque vehicula elementum facilisis. Duis tempus non nulla at consequat. Maecenas non dapibus augue, id egestas magna. Aliquam erat volutpat. Aliquam venenatis varius sem eu luctus. ',
        votes: []},
    ];

    this.randomizeUserAssignments(theses, papers, paperRatings);
    this.randomizePaperAssignements(theses, papers);
    this.randomizeCursors(theses, papers, paperRatings);

    return {users, theses, papers, paperRatings};
  }

  private randomizeUserAssignments(theses: ThesisModel[], papers: PaperModel[], paperRatings: PaperRatingModel[]) {
    for(let thesis of theses) {
      // Assign a random user as creator for thesis
      thesis.createdBy = Math.floor(Math.random() * 10);
    }

    for(let paper of papers) {
      // Assign a random user as creator for paper
      paper.createdBy = Math.floor(Math.random() * 10);
    }

    for(let rating of paperRatings) {
      // Assign a random user as creator for rating
      rating.createdBy = Math.floor(Math.random() * 10);

      // Assign a random users as voters for rating
      let nbVotes = Math.floor(Math.random() * 10);
      for(let i = 0; i < nbVotes; i++) {
        let id = Math.floor(Math.random() * 10);
        if(!rating.votes.includes(id)) {
          rating.votes.push(id);
        }
      }
    }
  }

  private randomizePaperAssignements(theses: ThesisModel[], papers: PaperModel[]) {
    for(let thesis of theses) {
      // Assign a random papers as validating for thesis
      let nbPaper = Math.floor(Math.random() * 10);
      for(let i = 0; i < nbPaper; i++) {
        let id = Math.floor(Math.random() * 10);
        if(!thesis.validating.includes(id)) {
          thesis.validating.push(id);
        }
      }

      // Assign a random papers as invalidating for thesis
      nbPaper = Math.floor(Math.random() * 10);
      // We force at least one paper for the thesis
      if(thesis.validating.length == 0 && nbPaper <= 0) {
        nbPaper = 1;
      }
      for(let i = 0; i < nbPaper; i++) {
        let id = Math.floor(Math.random() * 10);
        if(!thesis.validating.includes(id) && !thesis.invalidating.includes(id)) {
          thesis.invalidating.push(id);
        }
      }
    }

    for(let paper of papers) {
      // Assign random ratings to paper (at least one)
      let nbRating = Math.floor(Math.random() * 9) + 1;
      for (let i = 0; i < nbRating; i++) {
        let id = Math.floor(Math.random() * 10);
        if(!paper.ratings.includes(id)) {
          paper.ratings.push(id);
        }
      }
    }
  }

  private randomizeCursors(theses: ThesisModel[], papers: PaperModel[], paperRatings: PaperRatingModel[]) {
    for(let rating of paperRatings) {
      rating.cursor = Math.random();
    }

    for(let paper of papers) {
      paper.cursor = Math.random();
    }

    for(let thesis of theses) {
      thesis.cursor = Math.random();
    }
  }
}
