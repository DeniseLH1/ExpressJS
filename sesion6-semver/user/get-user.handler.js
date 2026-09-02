export const getUser={
    V1: async function(req,res) {
        res.status(410).json({error: 'Version 1.0.0'});
    },
    alpha_1: async function(req,res) {
        res.status(410).json({error: 'Version 1.0.0-alpha'});
    },
    beta_2: async function(req,res) {
        res.status(410).json({error: 'Version 2.0.0-beta'});
    },
    V2: async function(req,res) {
        res.status(410).json({error: 'Version 2.0.0'});
    },
    V3: async function(req,res) {
        res.status(410).json({error: 'Version 3.0.0'});
    },
    default: async function(req,res) {
        const obj={...req.query, ...req.params, ...req.body} 
        res.status(410).json({ error: 'defaul',obj});
    }

}