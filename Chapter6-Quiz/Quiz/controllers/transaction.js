const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    create : async (req, res, next) => {
        try {
            const { id_customer, detail_transaction } = req.body;
            
            var total_pembelian = 0;
            for (const detail of detail_transaction) {
                const product = await prisma.product.findUnique({
                    where: {
                        id : detail.id_product
                    }
                }); 
                if (product) {
                    total_pembelian += product.harga * (detail.jumlah || 1);
                    await prisma.product.update({
                        where: {
                            id: product.id
                        },
                        data:{
                            stok: product.stok - detail.jumlah
                        }
                    });
                }
            }

            const response = await prisma.transaction.create({
                data: {
                    id_customer,
                    total_pembelian,
                    detail_transaction: {
                        create: detail_transaction 
                    }
                }
            });
            res.json({
                status: true,
                message: 'Transaksi Berhasil Di lakukan',
                data: response
            })
        } catch (error) {
            next(error);
        }
    },
    showAll : async (req, res, next) => {
        try {
            const response = await prisma.transaction.findMany({
                include: {
                    customer : true,
                    detail_transaction: {
                        include: {
                            product : true
                        }
                    }
                }
            });
            if (response.length == 0) {
                res.status(400).json({
                    status: false,
                    message: 'Transaksi Masih Kosong',
                    data: response
                });
                return;
            }
            res.json({
                status: true,
                message: 'transaksi Berhasil Di Tampilkan',
                data: response
            })
        } catch (error) {
            next(error);
        }
    },
    showById : async (req, res, next) => {
        try {
            const response = await prisma.transaction.findUnique({
                where: {
                    id : parseInt(req.params.id)
                },
                include: {
                    customer : true,
                    detail_transaction: {
                        include: {
                            product : true
                        }
                    }
                }
            });
            if (!response) {
                res.status(400).json({
                    status: false,
                    message: 'Transaksi Tidak Di Temukan',
                    data: response
                });
                return;
            }
            res.json({
                status: true,
                message: 'transaksi Berhasil Di Tampilkan',
                data: response
            })
        } catch (error) {
            next(error);
        }
    },
    update : async (req, res, next) => {
        try {
            const { id_customer, detail_transaction } = req.body;
            
            const TransaksiLama = await prisma.transaction.findUnique({
            where: { 
                id: parseInt(req.params.id) 
            },
            include: { 
                detail_transaction: true 
            }
            });
            for (const DetailLama of TransaksiLama.detail_transaction) {
            const product = await prisma.product.findUnique({
                where: { 
                    id: DetailLama.id_product 
                }
            });
            if (product) {
                await prisma.product.update({
                where: { 
                    id: product.id 
                },
                data: { 
                    stock: product.stok + DetailLama.jumlah 
                }
                });
            }
            }
                       
            var total_pembelian = 0;
            for (const detail of detail_transaction) {
                const product = await prisma.product.findUnique({
                    where: {
                        id : detail.id_product
                    }
                }); 
                if (product) {
                    total_pembelian += product.harga * (detail.jumlah || 1);
                    await prisma.product.update({
                        where: {
                            id: product.id
                        },
                        data:{
                            stok: product.stok - detail.jumlah
                        }
                    });
                }
            }

            const response = await prisma.transaction.update({
                where: {
                    id : parseInt(req.params.id)
                },
                data: {
                    id_customer,
                    total_pembelian,
                    detail_transaction: {
                        create: detail_transaction
                    }
                }
            });
            res.json({
                status: true,
                message: 'Transaksi Berhasil Di lakukan',
                data: response
            })
        } catch (error) {
            next(error);
        }
    },
    delete : async (req, res, next) => {
        try {
            await prisma.detail_transaction.delete({
                where: {
                    id_transaction: parseInt(req.params.id)
                }
            });
            const response = await prisma.transaction.delete({
                where: {
                    id : parseInt(req.params.id)
                }
            });
            res.json({
                status: true,
                message: 'Transaksi Berhasil Di Hapus',
                data: response
            });
        } catch (error) {
            next(error);
        }
    }
}