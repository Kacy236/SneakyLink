import asyncHandler from "express-async-handler";
import { prisma } from '../config/prismaConfig.js';

// Create a new residency
export const createResidency = asyncHandler(async (req, res) => {
    // Destructure data directly from req.body (no .data)
    const { title, description, price, address, country, city, facilities, image, userEmail } = req.body;

    try {
        // Create residency in the database
        const residency = await prisma.residency.create({
            data: {
                title, 
                description, 
                price, 
                address, 
                country, 
                city, 
                facilities, 
                image,
                owner: { connect: { email: userEmail } }, // Connect to user via email
            },
        });

        // Send success response
        res.status(201).json({ message: "Residency created successfully", residency });

    } catch (err) {
        // Handle Prisma unique constraint error (address conflict)
        if (err.code === "P2002") {
            return res.status(400).json({ message: "A residency with this address already exists" });
        }
        // Log error and send server error response
        console.error("Error creating residency:", err);
        res.status(500).json({ message: err.message });
    }
});

// Get all residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
    try {
        // Fetch all residencies ordered by creation date
        const residencies = await prisma.residency.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        // Send the residencies as a response
        res.status(200).json(residencies);

    } catch (err) {
        // Log error and send server error response
        console.error("Error fetching residencies:", err);
        res.status(500).json({ message: "Error fetching residencies" });
    }
});

// Get a specific residency by ID
export const getResidency = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        // Find residency by ID
        const residency = await prisma.residency.findUnique({
            where: { id },
        });

        // Handle case where no residency is found
        if (!residency) {
            return res.status(404).json({ message: "Residency not found" });
        }

        // Send the found residency as a response
        res.status(200).json(residency);

    } catch (err) {
        // Log error and send server error response
        console.error("Error fetching residency:", err);
        res.status(500).json({ message: err.message });
    }
});
