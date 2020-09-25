const express = require('express');
const exportModule = module.exports = {};

exportModule.goToPage = (req, res) => {
    res.render(`${req.params.htmlName}.html`);
};